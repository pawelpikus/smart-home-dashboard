import { Props } from "../../types";

const Logo: React.FC<Props> = ({ src, ...restProps }) => {
  return (
    <div>
      <img {...restProps} src={src} alt="logo" />
    </div>
  );
};

export default Logo;
