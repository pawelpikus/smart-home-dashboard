import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Main } from "../components";

const ENDPOINT = "http://localhost:4001";

const MainContainer = () => {
  const [response, setResponse] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("connect", () => {
      console.log(socket.connected && "socket connected");
    });
    socket.on("SmartDeviceDetails", (res) => {
      setResponse(res);
    });
  }, []);

  return (
    <Main>
      <Main.Container>
        <Main.Title>Hello, Alicia</Main.Title>
        <Main.Subtitle>Have a nice day</Main.Subtitle>
        <Main.DFlex>
          <Main.Dialog response={response} type={type} />
          <Main.Devices response={response} setType={setType} />
        </Main.DFlex>
      </Main.Container>
    </Main>
  );
};

export default MainContainer;
