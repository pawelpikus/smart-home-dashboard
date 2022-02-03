import { Props } from "../../types";

const Navbar: React.FC<Props> = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

export default Navbar;
