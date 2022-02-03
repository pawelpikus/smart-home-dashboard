import { Props } from "../../types";

const SideBar: React.FC<Props> = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

export default SideBar;
