import React from "react";

export interface Props extends ILogoProps {
  children: React.ReactNode;
}

export interface ILogoProps {
  src?: string;
}
