import React, { Dispatch, SetStateAction } from "react";

export interface Props {
  readonly children: React.ReactNode;
}

export interface ILogoProps extends Props {
  src: string;
}

export interface INavItem extends Props {
  data: string;
}

export interface IButtonLink extends Props {
  href: string;
}

export interface ICardProps extends Props {
  type?: string;
  setType?: Dispatch<SetStateAction<string>>;
}

export interface ICardStatus {
  status: string;
}

export interface ICardIcon {
  type: string | undefined;
}

export interface ICardOnOff {
  onOff: boolean;
}

type Response = {
  SmartBulb: {
    type: "bulb";
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
    isTurnedOn: boolean;
    brightness: number; // <0, 100>
    color: string; // in the CSS formats
  };
  SmartOutlet: {
    type: "outlet";
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
    isTurnedOn: boolean;
    powerConsumption: number; // in watts
  };
  SmartTemperatureSensor: {
    type: "temperatureSensor";
    id: string;
    name: string;
    isTurnedOn: boolean;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
    temperature: number; // in Celsius
  };
};

export interface IDialogRes {
  type: string;
  response: Response;
  error: boolean;
}

export interface IMainDevices {
  response: Response;
  setType: Dispatch<SetStateAction<string>>;
  error: boolean;
}

export interface IDevice {
  response: Response;
}
