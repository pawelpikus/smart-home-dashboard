import { useLayoutEffect, useRef } from "react";
import { Props } from "../../types";
import Card from "../Card";
import interact from "interactjs";

const Main = ({ children, ...restProps }: Props) => {
  return (
    <div
      className="min-w-full lg:row-start-2 lg:justify-start lg:flex lg:flex-col lg:col-start-2 lg:text-xl lg:h-screen lg:min-w-min lg:mx-4 lg:mt-4"
      {...restProps}
    >
      {children}
    </div>
  );
};

Main.Container = function mainContainer({ children }: Props) {
  return <div className="w-11/12 py-2 mx-auto ">{children}</div>;
};

Main.Col = function mainCol({ children }: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 lg:justify-between">
      {children}
    </div>
  );
};

Main.Title = function MainTitle({ children, ...restProps }: Props) {
  return (
    <h1
      className="mt-5 text-2xl font-bold text-center text-black lg:text-4xl lg:text-left "
      {...restProps}
    >
      {children}
    </h1>
  );
};

Main.Subtitle = function MainSubTitle({ children, ...restProps }: Props) {
  return (
    <p
      {...restProps}
      className="mb-5 text-sm text-center text-black lg:mb-8 opacity-70 lg:text-xl lg:text-left "
    >
      {children}
    </p>
  );
};

Main.Dialog = function MainDialog({ ...restProps }) {
  const draggableRef = useRef<HTMLDivElement>(null);

  const position = { x: 0, y: 0 };
  // create a restrict modifier to prevent dragging an element out of its parent
  const restrictToParent = interact.modifiers.restrictRect({
    restriction: "parent",
    endOnly: true,
  });

  // create a snap modifier which changes the event coordinates to the closest
  // corner of a grid
  const snap100x100 = interact.modifiers.snap({
    targets: [interact.snappers.grid({ x: 50, y: 50 })],
    relativePoints: [{ x: 0, y: 0 }],
  });
  useLayoutEffect(() => {
    if (draggableRef.current) {
      interact(draggableRef.current).draggable({
        inertia: true,
        // apply the restrict and then the snap modifiers to drag events
        modifiers: [restrictToParent, snap100x100],
        listeners: {
          move(event) {
            position.x += event.dx;
            position.y += event.dy;

            event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
          },
        },
      });
    }
  });

  return (
    <div
      ref={draggableRef}
      {...restProps}
      className="p-10 my-4 text-center transition-colors bg-white border-none shadow-sm select-none touch-none rounded-2xl text-textBlue hover:bg-bgHover lg:w-full lg:h-full"
    >
      Main dialog window
    </div>
  );
};

const cards = [
  { type: "bulb", name: "Bulb", status: "connected", isTurnedOn: true },
  { type: "outlet", name: "Outlet", status: "disconnected", isTurnedOn: false },
  {
    type: "temperatureSensor",
    name: "TempSensor",
    status: "poorConnection",
    isTurnedOn: true,
  },
];

Main.Devices = function MainDevices({ ...restProps }: Props) {
  return (
    <div
      className="flex flex-wrap justify-between lg:flex-col lg:w-1/2 lg:items-center"
      {...restProps}
    >
      {cards.map((card) => (
        <Card key={card.name}>
          <div className="flex items-start justify-between w-full gap-2 ">
            <Card.Icon type={card.type} />
            <Card.Status status={card.status} />
          </div>
          <div className="flex items-start justify-between gap-2">
            <Card.Title>{card.name}</Card.Title>
            <Card.OnOff onOff={card.isTurnedOn} />
          </div>
        </Card>
      ))}
      <Card>
        <Card.AddNew>Add new Device</Card.AddNew>
      </Card>
    </div>
  );
};

export default Main;
