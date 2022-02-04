import { Props } from "../../types";

const Main = ({ children, ...restProps }: Props) => {
  return <div {...restProps}>{children}</div>;
};

Main.Title = function MainTitle({ children, ...restProps }: Props) {
  return (
    <h1 className="font-bold text-xl my-5" {...restProps}>
      {children}
    </h1>
  );
};

Main.Dialog = function MainDialog({ ...restProps }) {
  return (
    <div className=" min-w-full bg-white rounded border-none p-10 my-4 shadow text-textBlue ">
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
    <div className="flex flex-wrap gap-2" {...restProps}>
      {cards.map((card) => (
        <div
          key={card.name}
          className="bg-white p-8  border-none rounded shadow text-textBlue "
        >
          <h3>{card.name}</h3>
          <p>{card.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
