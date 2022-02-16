import {
  ICardIcon,
  ICardOnOff,
  ICardProps,
  ICardStatus,
  Props,
} from "../../types";
import { IoMdAddCircle } from "react-icons/io";
import { CgBulb } from "react-icons/cg";
import { MdWifi, MdWifiOff, MdSignalWifi0Bar } from "react-icons/md";
import { BsOutlet } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";

const Card = ({ children, type, setType, setShow }: ICardProps) => {
  const handleClick = () => {
    if (setType && type) setType(type);
    if (setShow) setShow(true);
  };
  return (
    <div
      onClick={handleClick}
      className="group mb-4 flex flex-col justify-center w-[46%] p-4 lg:p-8 cursor-pointer transition-colors bg-white border-none shadow-sm rounded-2xl text-black hover:bg-accent hover:text-white lg:w-full lg:items-stretch"
    >
      {children}
    </div>
  );
};

Card.Icon = function CardIcon({ type }: ICardIcon) {
  let icon = null;
  switch (type) {
    case "bulb":
      icon = <CgBulb />;
      break;
    case "outlet":
      icon = <BsOutlet />;
      break;
    case "temperatureSensor":
      icon = <FaTemperatureHigh />;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div className="p-3 mb-2 text-2xl rounded-full text-textBlue bg-bgLight group-hover:text-white group-hover:bg-accentLight">
      {icon}
    </div>
  );
};

Card.Title = function CardTitle({ children }: Props) {
  return <h3 className="font-bold text-md">{children}</h3>;
};

Card.Status = function CardStatus({ status }: ICardStatus) {
  let icon = null;

  switch (status) {
    case "connected":
      icon = <MdWifi />;
      break;
    case "poorConnection":
      icon = <MdSignalWifi0Bar />;
      break;
    default:
      icon = <MdWifiOff />;
      break;
  }

  return (
    <div className={`text-2xl text-textBlue group-hover:text-white`}>
      {icon}
    </div>
  );
};

Card.OnOff = function CardOnOff({ onOff }: ICardOnOff) {
  return (
    <div
      className={` group-hover:text-white text-textBlue font-bold ${
        onOff === false && `opacity-50`
      }`}
    >
      {onOff ? `on` : `off`}
    </div>
  );
};

Card.AddNew = function CardAddNew({ children }: Props) {
  return (
    <div className="flex items-center justify-between opacity-100 group hover:bg-accent hover:text-white text-textBlue">
      <h3 className="text-left group-hover:text-white text-md opacity-70 group-hover:opacity-100">
        {children}
      </h3>
      <div className="p-3 text-2xl group-hover:text-white">
        <IoMdAddCircle />
      </div>
    </div>
  );
};

export default Card;
