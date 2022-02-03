import { Props } from "../../types";

const Navbar = ({ children, ...restProps }: Props) => {
  return <div {...restProps}>{children}</div>;
};

export default Navbar;
