import { Props } from "../../types";

const ButtonLink = ({ children, href }: Props) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center w-12 h-12 transition-colors border-2 rounded-full shadow-lg bg-bgDark border-textBlue hover:bg-accent hover:border-none"
    >
      {children}
    </a>
  );
};

export default ButtonLink;
