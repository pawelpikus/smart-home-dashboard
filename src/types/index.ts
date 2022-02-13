import React, { Dispatch, SetStateAction } from "react";

export interface Props
  extends ILogoProps,
    INavItem,
    IButtonLink,
    ICardStatus,
    ICardIcon,
    ICardOnOff,
    IDialogRes {
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
  onClick?: () => void | undefined;
  setType?: Dispatch<SetStateAction<string | undefined>>;
}

export interface ICardIcon {
  type?: string | undefined;
}

export interface ICardOnOff {
  onOff?: boolean;
}

export interface IDialogRes {
  response?: {
    SmartBulb: {
      type: "bulb" | undefined;
      id: string;
      name: string;
      connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
      isTurnedOn: boolean;
      brightness: number; // <0, 100>
      color: string; // in the CSS formats
    };
    SmartOutlet: {
      type: "outlet" | undefined;
      id: string;
      name: string;
      connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
      isTurnedOn: boolean;
      powerConsumption: number; // in watts
    };
    SmartTemperatureSensor: {
      type: "temperatureSensor" | undefined;
      id: string;
      name: string;
      isTurnedOn: boolean;
      connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
      temperature: number; // in Celsius
    };
  };
}
