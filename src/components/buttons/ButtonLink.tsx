import { IButtonLink } from "../../types";

const ButtonLink = ({ children, href }: IButtonLink) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg group bg-bgDark lg:hover:border-r-4 lg:hover:border-accent lg:rounded-none lg:w-40 lg:hover:bg-gradient-to-r from-white to-accentLight lg:py-10 lg:shadow-none lg:bg-white lg:focus:border-r-4 lg:focus:border-accent lg:focus:bg-gradient-to-r lg:focus:outline-none "
    >
      <div className="text-white group-hover:lg:text-white group-focus:lg:text-white lg:text-4xl lg:text-left lg:text-textBlue">
        {children}
      </div>
    </a>
  );
};

export default ButtonLink;
