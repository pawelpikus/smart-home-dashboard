import { Props } from "../../types";

const Devices = ({ children, ...restProps }: Props) => {
  return <div {...restProps}>{children}</div>;
};

export default Devices;
