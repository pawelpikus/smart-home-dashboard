import { SideBar } from "../components";

const SidebarContainer = () => {
  return (
    <SideBar>
      <SideBar.Container>
        <SideBar.Members />
        <SideBar.Cam />
        <SideBar.Weather />
      </SideBar.Container>
    </SideBar>
  );
};

export default SidebarContainer;
