import { Main } from "../components";
import { Props } from "../types";

const MainContainer: React.FC<Props> = () => {
  return (
    <Main>
      <Main.Title>Hello, Alicia</Main.Title>
      <Main.Subtitle>Have a nice day</Main.Subtitle>
      <Main.Dialog />
      <Main.Devices />
    </Main>
  );
};

export default MainContainer;
