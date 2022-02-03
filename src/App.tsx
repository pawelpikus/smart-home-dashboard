import {
  AppLayout,
  Navbar,
  Main,
  Logo,
  NavbarItems,
  Title,
  Dialog,
  Devices,
  SideBar,
  Avatar,
  Cam,
  WeatherWidget,
  Members,
} from "./components";

const App = () => {
  return (
    <AppLayout>
      <Navbar>
        <Logo src={"sss"}>{}</Logo>
        <NavbarItems>
          <div></div>
        </NavbarItems>
      </Navbar>
      <Main>
        <Title>Good morning, User!</Title>
        <Dialog>This is dragabble dialog component</Dialog>
        <Devices>These are devices</Devices>
      </Main>
      <SideBar>
        <Avatar>This is the avatar container</Avatar>
        <Cam>camera</Cam>
        <Members>Members List</Members>
        <WeatherWidget>Weather</WeatherWidget>
      </SideBar>
    </AppLayout>
  );
};

export default App;
