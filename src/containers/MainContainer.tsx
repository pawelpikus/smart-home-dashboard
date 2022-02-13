import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Main } from "../components";

const ENDPOINT = "http://localhost:4001";

const MainContainer = () => {
  const [response, setResponse] = useState(null);
  const [type, setType] = useState("bulb");
  const [error, setError] = useState(false);

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("connect", () => {
      console.log(socket.connected && "socket connected");
    });
    socket.on("SmartDeviceDetails", (res) => {
      setResponse(res);
    });
    socket.on("connect_error", () => {
      setError(true);
      setTimeout(() => {
        socket.connect();
      }, 1000);
    });
    return () => {
      socket.disconnect();
      setError(false);
    };
  }, []);

  return (
    <Main>
      <Main.Container>
        <Main.Title>Hello, Alicia</Main.Title>
        <Main.Subtitle>Have a nice day</Main.Subtitle>
        <Main.DFlex>
          <Main.Dialog response={response} error={error} type={type} />
          <Main.Devices response={response} error={error} setType={setType} />
        </Main.DFlex>
      </Main.Container>
    </Main>
  );
};

export default MainContainer;
