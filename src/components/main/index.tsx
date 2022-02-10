import { Props } from "../../types";
import Card from "../Card";

const Main = ({ children, ...restProps }: Props) => {
  return (
    <div
      className="min-w-full lg:row-start-2 lg:justify-center lg:flex lg:flex-col lg:col-start-2 lg:col-end-7 lg:text-xl lg:h-screen lg:min-w-min lg:mx-4 "
      {...restProps}
    >
      {children}
    </div>
  );
};

Main.Container = function mainContainer({ children }: Props) {
  return <div className="w-11/12 py-2 mx-auto ">{children}</div>;
};

Main.Title = function MainTitle({ children, ...restProps }: Props) {
  return (
    <h1
      className="mt-5 text-2xl font-bold text-center text-black lg:text-4xl"
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
      className="mb-5 text-sm text-center text-black opacity-70 lg:text-base "
    >
      {children}
    </p>
  );
};

Main.Dialog = function MainDialog({ ...restProps }) {
  return (
    <div
      {...restProps}
      className="min-w-full p-10 my-4 text-center transition-colors bg-white border-none shadow-sm rounded-2xl text-textBlue hover:bg-bgHover"
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
    <div className="flex flex-wrap justify-between" {...restProps}>
      {cards.map((card) => (
        <Card key={card.name}>
          <div className="flex items-start justify-between gap-2">
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
