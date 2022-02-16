import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { IDialogRes, IMainDevices, Props } from "../../types";
import Card from "../Card";
import interact from "interactjs";
import Spinner from "../common/Spinner";
import SmartBulb from "../devices/SmartBulb";
import SmartOutlet from "../devices/SmartOutlet";
import SmartTempSensor from "../devices/SmartTempSensor";
import ErrorAlert from "../common/ErrorAlert";

const Main = ({ children }: Props) => {
  return (
    <div className="min-w-full lg:row-start-2 lg:justify-start lg:flex lg:flex-col lg:col-start-2 lg:text-xl lg:h-screen lg:min-w-min lg:mx-4 lg:mt-4">
      {children}
    </div>
  );
};

Main.Container = function mainContainer({ children }: Props) {
  return <div className="w-11/12 gap-4 py-2 mx-auto">{children}</div>;
};

Main.DFlex = function mainDFlex({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:justify-center ">
      {children}
    </div>
  );
};

Main.Title = function MainTitle({ children }: Props) {
  return (
    <h1 className="mt-5 text-2xl font-bold text-center text-black lg:text-4xl lg:text-left ">
      {children}
    </h1>
  );
};

Main.Subtitle = function MainSubTitle({ children }: Props) {
  return (
    <p className="mb-5 text-sm text-center text-black lg:mb-8 opacity-70 lg:text-xl lg:text-left ">
      {children}
    </p>
  );
};

Main.Dialog = function MainDialog({
  response,
  type,
  show,
  setShow,
}: IDialogRes) {
  const [isLoading, setIsLoading] = useState(true);
  const draggableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (response) {
      setIsLoading(false);
    }
  }, [response]);

  const position = { x: 0, y: 0 };
  useLayoutEffect(() => {
    if (draggableRef.current) {
      const interactable = interact(draggableRef.current);
      interactable.draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: true,
          }),
        ],
        listeners: {
          move(event) {
            position.x += event.dx;
            position.y += event.dy;
            event.target.style.webkitTransform = event.target.style.transform =
              "translate(" + position.x + "px, " + position.y + "px)";
          },
        },
      });
    }
  });

  let smartDevice;
  switch (type) {
    case "outlet":
      smartDevice = <SmartOutlet response={response} />;
      break;
    case "bulb":
      smartDevice = <SmartBulb response={response} />;
      break;
    case "temperatureSensor":
      smartDevice = <SmartTempSensor response={response} />;
      break;
    default:
      smartDevice = null;
      break;
  }

  return show ? (
    <div
      ref={draggableRef}
      className={`relative z-50 w-1/2 p-2 my-4 text-center transition-colors bg-white border-none shadow-sm select-none lg:text-left lg:p-6 touch-none rounded-2xl text-textBlue hover:bg-bgHover`}
    >
      <button
        type="button"
        onClick={() => setShow(false)}
        className="absolute px-2 py-1 text-sm text-white rounded top-2 right-2 lg:top-4 lg:right-4 bg-bgDarker hover:bg-bgDark"
      >
        X
      </button>
      {isLoading ? <Spinner /> : smartDevice}
    </div>
  ) : null;
};

Main.Devices = function MainDevices({
  response,
  setType,
  setShow,
  error,
}: IMainDevices) {
  // `PropertyKey` is short for "string | number | symbol"
  // since an object key can be any of those types, our key can too
  // in TS 3.0+, putting just "string" raises an error
  function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
    return key in obj;
  }

  return error ? (
    <ErrorAlert />
  ) : (
    <div className="flex flex-wrap justify-between lg:flex-col lg:w-1/2 lg:items-center">
      {response ? (
        Object.keys(response).map((device) => {
          if (hasKey(response, device)) {
            return (
              <Card
                key={response[device].id}
                type={response[device].type}
                setType={setType}
                setShow={setShow}
              >
                <div className="flex items-start justify-between gap-2">
                  <Card.Icon type={response[device].type} />
                  <Card.Status status={response[device].connectionState} />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <Card.Title>{response[device].name}</Card.Title>
                  <Card.OnOff onOff={response[device].isTurnedOn} />
                </div>
              </Card>
            );
          }
          return null;
        })
      ) : (
        <Card>
          <Spinner />
        </Card>
      )}
      <Card>
        <Card.AddNew>Add new Device</Card.AddNew>
      </Card>
    </div>
  );
};

export default Main;
