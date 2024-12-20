import { useEffect, useState } from "react";
import "./Electronics.css";
import Card from "../card/Card";
import { getElectronicsData } from "./services/ElectronicsService";

function Electroics() {
  const [electronics, setElectronics] = useState([]);
  useEffect(() => {
    getElectronicsData(setElectronics); //load
  }, []);

  return (
    <div className="electronics">
      <div className="adElectronicsContainer"></div>

      <div>
        <div className="priceSorting"></div>

        <div className="rateSorting"></div>
      </div>

      <div className="electronicsDataContainer">
        {electronics.map((electroinicData) => {
          return <Card data={electroinicData} />;
        })}
      </div>
    </div>
  );
}

export default Electroics;
