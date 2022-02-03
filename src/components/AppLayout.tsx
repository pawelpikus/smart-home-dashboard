import { Props } from "../types";

const AppLayout = ({ children, ...restProps }: Props) => {
  return <div {...restProps}>{children}</div>;
};

export default AppLayout;
