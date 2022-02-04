import React from "react";
import { Logo, Navbar, NavbarItems } from "../components";
import { Props } from "../types";

const HeaderContainer: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar>
        <Logo src={""} />
        <NavbarItems>
          <div>Navbar items</div>
        </NavbarItems>
      </Navbar>
      {children}
    </div>
  );
};

export default HeaderContainer;
