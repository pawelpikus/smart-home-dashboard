import { Props } from "../../types";

const SideBar = ({ children, ...restProps }: Props) => {
  return <div {...restProps}>{children}</div>;
};

export default SideBar;

SideBar.Members = function SideBarMembers({ children }: Props) {
  return <div>{children}</div>;
};
