import { Props } from "../../types";

const ButtonLink = ({ children, href }: Props) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center w-12 h-12 transition-colors border-2 rounded-full shadow-lg group bg-bgDark border-textBlue hover:bg-accent hover:border-none lg:rounded-r-none lg:rounded-l-xl lg:w-48 lg:hover:bg-gradient-to-r from-bg-accentLight to-transparent lg:py-10 lg:shadow-none lg:bg-bgLight lg:border-none lg:hover:border-l-4 lg:hover:border-accent"
    >
      <div className="text-white group-hover:lg:text-white lg:text-2xl lg:text-left lg:text-textBlue">
        {children}
      </div>
    </a>
  );
};

export default ButtonLink;
