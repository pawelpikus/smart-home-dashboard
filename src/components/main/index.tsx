import { Props } from "../../types";

const Main = ({ children, ...restProps }: Props) => {
  return <div {...restProps}>{children}</div>;
};

export default Main;
