import { IDevice } from "../../types";

const SmartOutlet = ({ response }: IDevice) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h3 className="font-bold text-md">{response?.SmartOutlet.name}</h3>
      <p>
        Connection state:{" "}
        <span className="text-accent">
          {response?.SmartOutlet.connectionState}
        </span>{" "}
      </p>
      <p>
        Status:{" "}
        <span className="text-accent">
          {response?.SmartOutlet.isTurnedOn ? `on` : `off`}
        </span>
      </p>
      <div>
        Power Consumption:{" "}
        <span className="text-accent">
          {response?.SmartOutlet.powerConsumption} Watts
        </span>
      </div>
    </div>
  );
};

export default SmartOutlet;
