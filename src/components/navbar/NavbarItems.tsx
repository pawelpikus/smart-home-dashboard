import { Props } from "../../types";

const NavbarItems: React.FC<Props> = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

export default NavbarItems;
