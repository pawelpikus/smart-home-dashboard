import React from "react";
import { SideBar } from "../components";
import { Props } from "../types";

const SidebarContainer: React.FC<Props> = () => {
  return (
    <SideBar>
      <SideBar.Container>
        <SideBar.Members />
        <SideBar.Cam />
        <SideBar.Weather />
      </SideBar.Container>
    </SideBar>
  );
};

export default SidebarContainer;
