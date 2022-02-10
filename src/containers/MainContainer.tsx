import { Main } from "../components";
import { Props } from "../types";

const MainContainer: React.FC<Props> = () => {
  return (
    <Main>
      <Main.Container>
        <Main.Title>Hello, Alicia</Main.Title>
        <Main.Subtitle>Have a nice day</Main.Subtitle>
        <Main.Col>
          <Main.Dialog />
          <Main.Devices />
        </Main.Col>
      </Main.Container>
    </Main>
  );
};

export default MainContainer;
