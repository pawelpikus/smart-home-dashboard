import { Props } from "../../types";

const Devices: React.FC<Props> = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

export default Devices;
