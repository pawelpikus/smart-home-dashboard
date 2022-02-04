import { Devices, Dialog, Main, Title } from "../components";
import { Props } from "../types";

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Main>
        <Title>Title</Title>
        <Dialog>draggable dialog component</Dialog>
        <Devices>devices</Devices>
      </Main>
      {children}
    </div>
  );
};

export default MainContainer;
