import { Props } from "../../types";

const Header = ({ children, ...restProps }: Props) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 justify-center p-4 bg-white lg:row-start-2 lg:flex lg:flex-col lg:rounded-none lg:items-end lg:p-0 lg:relative lg:col-span-1 lg:h-screen lg:justify-start"
      {...restProps}
    >
      {children}
    </div>
  );
};

Header.Nav = function HeaderNav({ children, ...restProps }: Props) {
  return (
    <ul
      className="flex justify-center w-auto gap-6 lg:flex-col lg:mt-6"
      {...restProps}
    >
      {children}
    </ul>
  );
};

Header.NavItem = function HeaderNavItem({ children }: Props) {
  return <li className="">{children}</li>;
};

export default Header;
