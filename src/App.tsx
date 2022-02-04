import { AppLayout } from "./components";
import { HeaderContainer, MainContainer, SidebarContainer } from "./containers";

const App = () => {
  return (
    <AppLayout>
      <HeaderContainer />
      <MainContainer />
      <SidebarContainer />
    </AppLayout>
  );
};

export default App;
