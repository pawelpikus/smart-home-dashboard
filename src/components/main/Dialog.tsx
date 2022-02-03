import { Props } from "../../types";

const Dialog: React.FC<Props> = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

export default Dialog;
