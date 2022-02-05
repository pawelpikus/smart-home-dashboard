import React from "react";

export interface Props extends ILogoProps, INavItem, IButtonLink {
  children?: React.ReactNode;
}

export interface ILogoProps {
  src?: string;
}

export interface INavItem {
  data?: string;
}

export interface IButtonLink {
  href?: string;
}
