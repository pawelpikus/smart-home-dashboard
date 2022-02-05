import React from "react";
import { Header } from "../components";
import { AiFillHome } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
import ButtonLink from "../components/buttons/ButtonLink";
import { IconContext } from "react-icons";

const HeaderContainer = () => {
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <Header>
        <Header.Nav>
          <Header.NavItem>
            <ButtonLink href="#">
              <AiFillHome />
            </ButtonLink>
          </Header.NavItem>
          <Header.NavItem>
            <ButtonLink href="#">
              <RiDashboardFill />
            </ButtonLink>
          </Header.NavItem>
          <Header.NavItem>
            <ButtonLink href="#">
              <VscGraphLine />
            </ButtonLink>
          </Header.NavItem>
          <Header.NavItem>
            <ButtonLink href="#">
              <AiFillSetting />
            </ButtonLink>
          </Header.NavItem>
        </Header.Nav>
      </Header>
    </IconContext.Provider>
  );
};

export default HeaderContainer;
