import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Main } from "../components";

const ENDPOINT = "http://localhost:4001";

const MainContainer = () => {
  const [response, setResponse] = useState(null);
  const [type, setType] = useState("bulb");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("connect", () => {
      console.log(socket.connected && "socket connected");
    });
    socket.on("refresh", (SmartDeviceDetails) => {
      setResponse(SmartDeviceDetails);
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
          <Main.Dialog
            response={response}
            setShow={setShow}
            show={show}
            error={error}
            type={type}
          />
          <Main.Devices
            response={response}
            error={error}
            setShow={setShow}
            setType={setType}
          />
        </Main.DFlex>
      </Main.Container>
    </Main>
  );
};

export default MainContainer;
