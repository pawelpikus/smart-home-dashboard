import { Props } from "../../types";

const Header = ({ children, ...restProps }: Props) => {
  return <div {...restProps}>{children}</div>;
};

Header.Nav = function HeaderNav({ children, ...restProps }: Props) {
  return <div {...restProps}>{children}</div>;
};

Header.NavItem = function HeaderNavItem({
  children,
  data,
  ...restProps
}: Props) {
  return (
    <ul>
      <li {...restProps}>
        <a href="#">{children}</a>
      </li>
    </ul>
  );
};

export default Header;
