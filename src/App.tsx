import { AppLayout } from "./components";
import { HeaderContainer, MainContainer, SidebarContainer } from "./containers";
import AvatarContainer from "./containers/AvatarContainer";

const App = () => {
  return (
    <AppLayout>
      <AvatarContainer />
      <HeaderContainer />
      <MainContainer />
      <SidebarContainer />
    </AppLayout>
  );
};

export default App;
