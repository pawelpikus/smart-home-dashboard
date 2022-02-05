import React from "react";

export interface Props extends ILogoProps, INavItem {
  children?: React.ReactNode;
}

export interface ILogoProps {
  src?: string;
}

export interface INavItem {
  data?: string;
}
