import React from "react";
import { Props } from "../../types";

const ButtonLink = ({ children }: Props) => {
  return (
    <button className="w-10 h-10 bg-white border-2 rounded-full shadow border-textBlue ">
      {children}
    </button>
  );
};

export default ButtonLink;
