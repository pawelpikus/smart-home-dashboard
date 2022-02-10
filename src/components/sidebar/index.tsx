import { Props } from "../../types";
import { IoPersonCircle } from "react-icons/io5";

const SideBar = ({ children, ...restProps }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full lg:row-start-2 bg-bgDarker lg:mx-0 lg:col-start-7 lg:col-span-2"
      {...restProps}
    >
      {children}
    </div>
  );
};

SideBar.Container = function sideBarContainer({ children }: Props) {
  return <div className="w-11/12 py-2 mx-auto mb-24">{children}</div>;
};

SideBar.Members = function SideBarMembers() {
  return (
    <div className="self-start mt-6 ">
      <h3 className="mb-2 font-bold text-md lg:text-xl">At home now</h3>
      <div className="flex justify-center gap-2 py-2 bg-white rounded-lg">
        <div className="flex flex-col items-center justify-center p-2">
          <div className="p-2 text-black rounded-full bg-bgDarker ">
            <IoPersonCircle />
          </div>

          <p className="mt-1 text-xs font-bold lg:text-sm">Jimmy</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <div className="p-2 text-black rounded-full bg-bgDarker">
            <IoPersonCircle />
          </div>

          <p className="mt-1 text-xs font-bold lg:text-sm">Dolly</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <div className="p-2 text-black rounded-full bg-bgDarker">
            <IoPersonCircle />
          </div>
          <p className="mt-1 text-xs font-bold lg:text-sm">Eric</p>
        </div>
      </div>
    </div>
  );
};

SideBar.Cam = function SideBarCam() {
  return (
    <div className="mt-6">
      <img
        className="rounded-lg"
        src="livecam-view.png"
        alt="live camera view of the living room"
      />
    </div>
  );
};

SideBar.Weather = function SideBarWeather() {
  return (
    <div className="mt-6">
      <h3 className="mb-2 font-bold text-md lg:text-xl ">Weather conditions</h3>
      <img
        className="rounded-lg"
        src="weather.jpg"
        alt="weather conditions widget"
      />
    </div>
  );
};
export default SideBar;
