import { Props } from "../../types";

const ButtonLink = ({ children, href }: Props) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center w-12 h-12 transition-colors rounded-full shadow-lg hover:bg-accent lg:transition-colors group bg-bgDark lg:hover:border-r-4 lg:hover:border-accent lg:rounded-none lg:w-40 lg:hover:bg-gradient-to-r from-white to-accentLight lg:py-10 lg:shadow-none lg:bg-white"
    >
      <div className="text-white group-hover:lg:text-white lg:text-4xl lg:text-left lg:text-textBlue">
        {children}
      </div>
    </a>
  );
};

export default ButtonLink;
