import { Props } from "../../types";

const Card = ({ children }: Props) => {
  return (
    <div className="mb-4 text-center w-[46%] p-8 cursor-pointer transition-colors bg-white border-none shadow-sm rounded-2xl text-textBlue hover:bg-accent hover:text-white">
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ children, ...restProps }: Props) {
  return (
    <h3 className="text-lg font-bold" {...restProps}>
      {children}
    </h3>
  );
};

Card.Status = function CardStatus({ children, ...restProps }: Props) {
  return <p {...restProps}>{children}</p>;
};

export default Card;
