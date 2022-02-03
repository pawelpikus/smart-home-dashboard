import { Props } from "../../types";

const Dialog = ({ children, ...restProps }: Props) => {
  return <div {...restProps}>{children}</div>;
};

export default Dialog;
