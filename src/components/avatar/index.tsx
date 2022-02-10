import { BsFilePerson } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Props } from "../../types";

const Avatar = ({ children, ...restProps }: Props) => {
  return (
    <div
      {...restProps}
      className="row-start-1 gap-1 mx-auto text-white bg-bgDark lg:col-span-full"
    >
      {children}
    </div>
  );
};

Avatar.Container = function avatarContainer({ children }: Props) {
  return (
    <div className="flex items-center justify-end w-11/12 py-2 mx-auto ">
      {children}
    </div>
  );
};

Avatar.Img = function avatarImg() {
  return (
    <div className="ml-2 text-4xl transition-colors cursor-pointer hover:text-accent">
      <BsFilePerson />
    </div>
  );
};

Avatar.Details = function avatarDetails() {
  return (
    <div className="flex flex-col items-end justify-center">
      <h2 className="font-bold ">Alicia</h2>
      <div className="flex">
        <FiMapPin />
        <span className="ml-2 text-sm ">Nashville, Tennessee</span>
      </div>
    </div>
  );
};

export default Avatar;
