import { IDevice } from "../../types";

const SmartTempSensor = ({ response }: IDevice) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h3 className="font-bold text-md">
        {response?.SmartTemperatureSensor.name}
      </h3>
      <p>
        Connection state:{" "}
        <span className=" text-accent">
          {response?.SmartTemperatureSensor.connectionState}
        </span>
      </p>
      <div>
        Temperature:{" "}
        <span className=" text-accent">
          {response?.SmartTemperatureSensor.temperature}&#xb0;C
        </span>
      </div>
    </div>
  );
};

export default SmartTempSensor;
