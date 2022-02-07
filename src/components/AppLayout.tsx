import { Props } from "../types";

const AppLayout = ({ children, ...restProps }: Props) => {
  return (
    <div
      className="relative flex flex-col items-center w-11/12 mx-auto lg:w-full lg:mx-0 lg:grid lg:grid-cols-8"
      {...restProps}
    >
      {children}
    </div>
  );
};

export default AppLayout;
