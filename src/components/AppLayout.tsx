import { Props } from "../types";

const AppLayout = ({ children }: Props) => {
  return (
    <div className="w-full mx-auto lg:h-screen lg:justify-center lg:grid lg:grid-cols-desktop-dashboard">
      {children}
    </div>
  );
};

export default AppLayout;
