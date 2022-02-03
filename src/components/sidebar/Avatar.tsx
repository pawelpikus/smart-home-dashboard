import { Props } from "../../types";

const Avatar: React.FC<Props> = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

export default Avatar;
