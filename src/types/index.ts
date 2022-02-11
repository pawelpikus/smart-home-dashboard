import React from "react";

export interface Props
  extends ILogoProps,
    INavItem,
    IButtonLink,
    ICardStatus,
    ICardIcon,
    ICardOnOff {
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

export interface ICardStatus {
  status?: string;
}

export interface ICardIcon {
  type?: string;
}

export interface ICardOnOff {
  onOff?: boolean;
}
