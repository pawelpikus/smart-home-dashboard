import { Props } from "../../types";

const Title = ({ children, ...restProps }: Props) => {
  return <div {...restProps}>{children}</div>;
};

export default Title;
