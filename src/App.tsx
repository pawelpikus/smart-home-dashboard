import {
  AppLayout,
  Navbar,
  Main,
  Logo,
  NavbarItems,
  Title,
  Dialog,
  Devices,
} from "./components";

function App() {
  return (
    <AppLayout>
      <Navbar>
        <Logo src={""} />

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
        <Avatar></Avatar>
        <Cam></Cam>
        <Members></Members>
        <WeatherWidget></WeatherWidget>
      </SideBar>
    </AppLayout>
  );
}

export default App;
