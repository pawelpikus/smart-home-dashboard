import { Props } from "../../types";

const SideBar = ({ children, ...restProps }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen bg-bgDarker lg:mx-0 lg:col-start-7 lg:col-span-2"
      {...restProps}
    >
      {children}
    </div>
  );
};

export default SideBar;

SideBar.Members = function SideBarMembers({ children }: Props) {
  return <div>{children}</div>;
};

SideBar.Cam = function SideBarCam() {
  return <div>Cam</div>;
};

SideBar.Weather = function SideBarWeather() {
  return <div>Weather</div>;
};
