import { Props } from "../../types";
import Card from "../Cards";

const Main = ({ children, ...restProps }: Props) => {
  return (
    <div className="min-w-full " {...restProps}>
      {children}
    </div>
  );
};

Main.Title = function MainTitle({ children, ...restProps }: Props) {
  return (
    <h1 className="my-5 text-xl font-bold text-center" {...restProps}>
      {children}
    </h1>
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
  { name: "Bulb", status: "on" },
  { name: "socket", status: "off" },
  { name: "TV", status: "on" },
];

Main.Devices = function MainDevices({ ...restProps }: Props) {
  return (
    <div className="flex flex-wrap justify-between" {...restProps}>
      {cards.map((card) => (
        <Card key={card.name}>
          <Card.Title>{card.name}</Card.Title>
          <Card.Status>{card.status}</Card.Status>
        </Card>
      ))}
    </div>
  );
};

export default Main;
