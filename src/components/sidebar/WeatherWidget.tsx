import { Props } from "../../types";

const WeatherWidget: React.FC<Props> = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

export default WeatherWidget;
