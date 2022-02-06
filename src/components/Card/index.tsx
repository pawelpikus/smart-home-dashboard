import { Props } from "../../types";
import { IoMdAddCircle } from "react-icons/io";
import { CgBulb } from "react-icons/cg";

const Card = ({ children }: Props) => {
  return (
    <div className="mb-4 text-center w-[46%] p-4 cursor-pointer transition-colors bg-white border-none shadow-sm rounded-2xl text-black hover:bg-accent hover:text-white">
      {children}
    </div>
  );
};

Card.Icon = function CardIcon({ ...restProps }: Props) {
  return <CgBulb />;
};

Card.Title = function CardTitle({ children, ...restProps }: Props) {
  return (
    <h3 className="text-xl font-bold" {...restProps}>
      {children}
    </h3>
  );
};

Card.Status = function CardStatus({ children, ...restProps }: Props) {
  return <p {...restProps}>{children}</p>;
};

Card.AddNew = function CardAddNew({ children }: Props) {
  return (
    <div className="flex justify-between items-center text-textBlue">
      <h3 className="text-md opacity-70 text-left">{children}</h3>
      <div className="text-2xl p-3">
        <IoMdAddCircle />
      </div>
    </div>
  );
};

export default Card;
