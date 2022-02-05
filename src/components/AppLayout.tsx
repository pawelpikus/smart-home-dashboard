import { Props } from "../types";

const AppLayout: React.FC<Props> = ({ children, ...restProps }) => {
  return (
    <div
      className="relative flex flex-col items-center w-11/12 mx-auto"
      {...restProps}
    >
      {children}
    </div>
  );
};

export default AppLayout;
