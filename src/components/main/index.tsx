import { Props } from "../../types";

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
        <div
          key={card.name}
          className=" mb-4 text-center w-[46%] p-8 cursor-pointer transition-colors bg-white border-none shadow-sm rounded-2xl text-textBlue hover:bg-bgHover"
        >
          <h3>{card.name}</h3>
          <p>{card.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
