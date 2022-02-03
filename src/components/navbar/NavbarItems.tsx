import { Props } from "../../types";

const NavbarItems = ({ children, ...restProps }: Props) => {
  return <div {...restProps}>{children}</div>;
};

export default NavbarItems;
