import React from "react";
import { Header } from "../components";
import { AiFillHome } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
import ButtonLink from "../components/buttons/ButtonLink";

const HeaderContainer = () => {
  return (
    <Header>
      <Header.Nav>
        <Header.NavItem>
          <ButtonLink>
            <AiFillHome />
          </ButtonLink>
        </Header.NavItem>
        <Header.NavItem>
          <ButtonLink>
            <RiDashboardFill />
          </ButtonLink>
        </Header.NavItem>
        <Header.NavItem>
          <ButtonLink>
            <VscGraphLine />
          </ButtonLink>
        </Header.NavItem>
        <Header.NavItem>
          <ButtonLink>
            <AiFillSetting />
          </ButtonLink>
        </Header.NavItem>
      </Header.Nav>
    </Header>
  );
};

export default HeaderContainer;
