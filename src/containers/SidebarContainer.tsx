import React from "react";
import { SideBar } from "../components";
import { Props } from "../types";

const SidebarContainer: React.FC<Props> = () => {
  return (
    <SideBar>
      <SideBar.Members>Members</SideBar.Members>
      <SideBar.Cam />
      <SideBar.Weather />
    </SideBar>
  );
};

export default SidebarContainer;
