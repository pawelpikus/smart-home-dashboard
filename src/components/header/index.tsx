import { Props } from "../../types";

const Header = ({ children, ...restProps }: Props) => {
  return <div {...restProps}>{children}</div>;
};

Header.Nav = function HeaderNav({ children, ...restProps }: Props) {
  return (
    <ul className="flex gap-4" {...restProps}>
      {children}
    </ul>
  );
};

Header.NavItem = function HeaderNavItem({
  children,
  data,
  ...restProps
}: Props) {
  return <li>{children}</li>;
};

export default Header;
