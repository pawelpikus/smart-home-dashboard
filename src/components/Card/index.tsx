import { Props } from "../../types";
import { IoMdAddCircle } from "react-icons/io";
import { CgBulb } from "react-icons/cg";
import { useState } from "react";

const Card = ({ children }: Props) => {
  return (
    <div className="mb-4 flex flex-col justify-center w-[46%] p-4 cursor-pointer transition-colors bg-white border-none shadow-sm rounded-2xl text-black hover:bg-accent hover:text-white">
      {children}
    </div>
  );
};

Card.Icon = function CardIcon() {
  return (
    <div className="my-2 text-2xl">
      <CgBulb />
    </div>
  );
};

Card.Title = function CardTitle({ children, ...restProps }: Props) {
  return (
    <h3 className="text-xl font-bold" {...restProps}>
      {children}
    </h3>
  );
};

Card.Status = function CardStatus({ children, status }: Props) {
  const statusColor = (stat: string) => {
    if (stat === "connected") {
      return "text-connected";
    } else if (stat === "poorConnection") {
      return "text-poorConnection";
    } else {
      return "text-disconnected";
    }
  };

  return <p className={status && statusColor(status)}>{children}</p>;
};

Card.AddNew = function CardAddNew({ children }: Props) {
  return (
    <div className="flex items-center justify-between opacity-100 hover:bg-accent hover:text-white text-textBlue">
      <h3 className="text-left text-md opacity-70 hover:opacity-100">
        {children}
      </h3>
      <div className="p-3 text-2xl">
        <IoMdAddCircle />
      </div>
    </div>
  );
};

export default Card;
