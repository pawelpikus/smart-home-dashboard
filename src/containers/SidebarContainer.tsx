import React from "react";
import { SideBar } from "../components";
import { Props } from "../types";

const SidebarContainer: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <SideBar>
        <SideBar.Members>Members</SideBar.Members>
        <SideBar.Cam />
        <SideBar.Weather />
      </SideBar>
      {children}
    </div>
  );
};

export default SidebarContainer;
