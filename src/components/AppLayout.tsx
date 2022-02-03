import { Props } from "../types";

const AppLayout: React.FC<Props> = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

export default AppLayout;
