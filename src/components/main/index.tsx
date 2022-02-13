import { useLayoutEffect, useRef } from "react";
import { Props } from "../../types";
import Card from "../Card";
import interact from "interactjs";
import { RiH3 } from "react-icons/ri";

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
  return <div className="w-11/12 gap-4 py-2 mx-auto">{children}</div>;
};

Main.DFlex = function mainDFlex({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 lg:flex-row ">
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

Main.Dialog = function MainDialog({ response, ...restProps }: Props) {
  const draggableRef = useRef<HTMLDivElement>(null);

  const position = { x: 0, y: 0 };
  // create a restrict modifier to prevent dragging an element out of its parent
  const restrictToParent = interact.modifiers.restrictRect({
    restriction: "parent",
    endOnly: true,
  });

  useLayoutEffect(() => {
    if (draggableRef.current) {
      interact(draggableRef.current).draggable({
        inertia: true,
        // apply the restrict and then the snap modifiers to drag events
        modifiers: [restrictToParent],
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

  const smartBulb = response && (
    <div className="flex flex-col gap-2 ">
      <h3 className="font-bold text-md">{response.SmartBulb.name}</h3>
      <p>Connection state: {response.SmartBulb.connectionState}</p>
      <p>Status: {response.SmartBulb.isTurnedOn ? `on` : `off`}</p>
      <div>
        Color:{" "}
        <span className={` w-4 h-4 bg-[${response.SmartBulb.color}]`}></span>
      </div>
    </div>
  );

  const smartOutlet = response && (
    <div className="flex flex-col gap-2 ">
      <h3 className="font-bold text-md">{response.SmartOutlet.name}</h3>
      <p>Connection state: {response.SmartOutlet.connectionState}</p>
      <p>Status: {response.SmartOutlet.isTurnedOn ? `on` : `off`}</p>
      <div>
        Power Consumption:{" "}
        <span className={` w-4 h-4 text-red`}>
          {response.SmartOutlet.powerConsumption}
        </span>
      </div>
    </div>
  );

  const smartTempSensor = response && (
    <div className="flex flex-col gap-2 ">
      <h3 className="font-bold text-md">
        {response.SmartTemperatureSensor.name}
      </h3>
      <p>Connection state: {response.SmartTemperatureSensor.connectionState}</p>
      <div>
        Power Consumption:{" "}
        <span className={` w-4 h-4 text-red`}>
          {response.SmartTemperatureSensor.temperature} C
        </span>
      </div>
    </div>
  );

  return (
    <div
      ref={draggableRef}
      {...restProps}
      className="p-10 my-4 text-left transition-colors bg-white border-none shadow-sm select-none touch-none rounded-2xl text-textBlue hover:bg-bgHover lg:w-full "
    >
      {response ? smartOutlet : <div>Loading...</div>}
    </div>
  );
};

const cards = [
  { type: "bulb", name: "Bulb", status: "connected", isTurnedOn: true },
  { type: "outlet", name: "Outlet", status: "disconnected", isTurnedOn: false },
  {
    type: "temperatureSensor",
    name: "Temp Sensor",
    status: "poorConnection",
    isTurnedOn: true,
  },
];

Main.Devices = function MainDevices({ response, ...restProps }: Props) {
  return (
    <div
      className="flex flex-wrap justify-between lg:flex-col lg:w-1/2 lg:items-center"
      {...restProps}
    >
      {response ? (
        Object.keys(response).map((key, index) => (
          <Card key={index}>
            <div className="flex items-start justify-between gap-2">
              <Card.Icon type={response.key.type} />
              <Card.Status status={response.key.status} />
            </div>
            <div className="flex items-start justify-between gap-2">
              <Card.Title>{response.key.name}</Card.Title>
              <Card.OnOff onOff={response.key.isTurnedOn} />
            </div>
          </Card>
        ))
      ) : (
        <div>Loading...</div>
      )}
      <Card>
        <Card.AddNew>Add new Device</Card.AddNew>
      </Card>
    </div>
  );
};

export default Main;
