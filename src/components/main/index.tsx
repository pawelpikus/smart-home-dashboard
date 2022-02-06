import { Props } from "../../types";
import Card from "../Card";

const Main = ({ children, ...restProps }: Props) => {
  return (
    <div className="min-w-full mt-14" {...restProps}>
      {children}
    </div>
  );
};

Main.Title = function MainTitle({ children, ...restProps }: Props) {
  return (
    <h1
      className="mt-5 text-2xl font-bold text-center text-black "
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
      className="text-sm text-black opacity-70 text-center mb-5 "
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
  { name: "Bulb", status: "connected" },
  { name: "Outlet", status: "disconnected" },
  { name: "TempSensor", status: "poor connection" },
];

Main.Devices = function MainDevices({ ...restProps }: Props) {
  return (
    <div className="flex flex-wrap justify-between" {...restProps}>
      {cards.map((card) => (
        <Card key={card.name}>
          <Card.Icon />
          <Card.Title>{card.name}</Card.Title>
          <Card.Status>{card.status}</Card.Status>
        </Card>
      ))}
      <Card>
        <Card.AddNew>Add new Device</Card.AddNew>
      </Card>
    </div>
  );
};

export default Main;
