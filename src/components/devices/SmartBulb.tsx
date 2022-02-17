import { IDevice } from "../../types";

const SmartBulb = ({ response }: IDevice) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h3 className="font-bold text-md">{response?.SmartBulb.name}</h3>
      <p>
        Connection state:{" "}
        <span className="text-accent">
          {response?.SmartBulb.connectionState}
        </span>
      </p>
      <p>
        Status:{" "}
        <span className="text-accent">
          {response?.SmartBulb.isTurnedOn ? `on` : `off`}
        </span>
      </p>
      <p>
        Brightness:{" "}
        <span className="text-accent">{response?.SmartBulb.brightness}%</span>
      </p>
      <div>
        Color:{" "}
        <span
          style={{ backgroundColor: response?.SmartBulb.color }}
          className={`w-8 h-4 align-middle rounded inline-block`}
        ></span>
      </div>
    </div>
  );
};

export default SmartBulb;
