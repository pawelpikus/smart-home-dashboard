import { Main } from "../components";
import { Props } from "../types";

const MainContainer: React.FC<Props> = () => {
  return (
    <Main>
      <Main.Title>Hello, User!</Main.Title>
      <Main.Dialog />
      <Main.Devices />
    </Main>
  );
};

export default MainContainer;
