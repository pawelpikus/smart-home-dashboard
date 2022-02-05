import { IconContext } from "react-icons";
import { BsFilePerson } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Props } from "../../types";

const Avatar = ({ children, ...restProps }: Props) => {
  return (
    <div
      {...restProps}
      className="fixed top-0 left-0 right-0 flex items-center justify-end gap-1 p-2 text-black bg-white rounded-lg shadow-md"
    >
      {children}
    </div>
  );
};

Avatar.Img = function avatarImg() {
  return (
    <IconContext.Provider value={{ color: "#3E4047", size: "2.5em" }}>
      <BsFilePerson />
    </IconContext.Provider>
  );
};

Avatar.Details = function avatarDetails({ children, ...restProps }: Props) {
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
