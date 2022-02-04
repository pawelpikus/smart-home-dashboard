import React from "react";
import { Avatar, Cam, Members, SideBar, WeatherWidget } from "../components";
import { Props } from "../types";

const SidebarContainer: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <SideBar>
        <Avatar>avatar container</Avatar>
        <Cam>camera</Cam>
        <Members>Members List</Members>
        <WeatherWidget>Weather</WeatherWidget>
      </SideBar>
      {children}
    </div>
  );
};

export default SidebarContainer;
