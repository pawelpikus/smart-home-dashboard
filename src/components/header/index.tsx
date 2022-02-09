import { Props } from "../../types";

const Header = ({ children, ...restProps }: Props) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 justify-center p-4 bg-white rounded-lg lg:flex lg:flex-col lg:rounded-none lg:items-end lg:p-0 lg:relative lg:col-span-1 lg:h-screen"
      {...restProps}
    >
      {children}
    </div>
  );
};

Header.Nav = function HeaderNav({ children, ...restProps }: Props) {
  return (
    <ul className="flex justify-center w-auto gap-6 lg:flex-col" {...restProps}>
      {children}
    </ul>
  );
};

Header.NavItem = function HeaderNavItem({ children }: Props) {
  return <li className="lg:mb-10">{children}</li>;
};

export default Header;
