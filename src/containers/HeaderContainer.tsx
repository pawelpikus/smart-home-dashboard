import React from "react";
import { Header } from "../components";
import { Props } from "../types";

const HeaderContainer = () => {
  return (
    <Header>
      <Header.Nav>
        <Header.NavItem>Link1</Header.NavItem>
        <Header.NavItem>Link2</Header.NavItem>
        <Header.NavItem>Link2</Header.NavItem>
      </Header.Nav>
    </Header>
  );
};

export default HeaderContainer;
