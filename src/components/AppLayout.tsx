import { Props } from "../types";

const AppLayout = ({ children, ...restProps }: Props) => {
  return (
    <div
      className="w-full mx-auto lg:h-screen lg:justify-center lg:grid lg:grid-cols-desktop-dashboard"
      {...restProps}
    >
      {children}
    </div>
  );
};

export default AppLayout;
