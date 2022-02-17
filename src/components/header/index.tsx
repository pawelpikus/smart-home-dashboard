import { Props } from "../../types";

const Header = ({ children }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 justify-center p-4 bg-white lg:row-start-2 lg:flex lg:flex-col lg:justify-between lg:rounded-none lg:items-end lg:p-0 lg:relative lg:col-span-1 lg:h-full">
      {children}
    </div>
  );
};

Header.Nav = function HeaderNav({ children }: Props) {
  return (
    <ul className="flex justify-center w-auto gap-6 lg:flex-col lg:mt-6">
      {children}
    </ul>
  );
};

Header.NavItem = function HeaderNavItem({ children }: Props) {
  return <li>{children}</li>;
};

export default Header;
