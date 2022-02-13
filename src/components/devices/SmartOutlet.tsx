import { IDevice } from "../../types";

const SmartOutlet = ({ response }: IDevice) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h3 className="font-bold text-md">{response.SmartOutlet.name}</h3>
      <p>Connection state: {response.SmartOutlet.connectionState}</p>
      <p>Status: {response.SmartOutlet.isTurnedOn ? `on` : `off`}</p>
      <div>
        Power Consumption:{" "}
        <span className="text-accent">
          {response.SmartOutlet.powerConsumption} Watts
        </span>
      </div>
    </div>
  );
};

export default SmartOutlet;
