import { ILogoProps } from "../../types";

const Logo = ({ src, ...restProps }: ILogoProps) => {
  return <div {...restProps}></div>;
};

export default Logo;
