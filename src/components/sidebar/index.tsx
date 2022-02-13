import { Props } from "../../types";
import { IoPersonCircle } from "react-icons/io5";

const SideBar = ({ children }: Props) => {
  return (
    <div className="lg:row-start-2 bg-bgDarker lg:mx-0 lg:col-start-3">
      {children}
    </div>
  );
};

SideBar.Container = function sideBarContainer({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 gap-4 py-2 pb-24 mx-auto md:flex-row md:justify-between md:items-start lg:flex-col">
      {children}
    </div>
  );
};

SideBar.Members = function SideBarMembers() {
  return (
    <div className="self-start w-full mt-6 md:w-1/5 lg:w-full">
      <h3 className="mb-2 font-bold text-md lg:text-xl">At home now</h3>
      <div className="flex justify-center gap-2 py-2 bg-white rounded-lg md:flex-col md:items-center lg:flex-row">
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
    <div className="mt-6 md:w-3/5 lg:w-full">
      <h3 className="mb-2 font-bold text-md lg:text-xl ">Live Cam</h3>
      <img
        className="min-w-full rounded-lg"
        src="livecam-view.png"
        alt="live camera view of the living room"
      />
    </div>
  );
};

SideBar.Weather = function SideBarWeather() {
  return (
    <div className="mt-6 md:w-3/5 lg:w-full">
      <h3 className="mb-2 font-bold text-md lg:text-xl ">Weather conditions</h3>
      <img
        className="min-w-full rounded-lg "
        src="weather.jpg"
        alt="weather conditions widget"
      />
    </div>
  );
};
export default SideBar;
