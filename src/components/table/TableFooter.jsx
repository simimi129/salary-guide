import style from "./TableFooter.module.css";
import { data } from "../../data/data";
import { useState, useEffect } from "react";

function calcAvg(forValue, data) {
  let sum = 0;
  for (const item of data) {
    sum += item[forValue];
  }
  return (sum / data.length).toFixed(0);
}

function TableFooter({ country, role }) {
  const [min, setMin] = useState(0);
  const [med, setMed] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    setMin(calcAvg("min", data.find((d) => d.optionValue === country)[role]));
    setMed(calcAvg("med", data.find((d) => d.optionValue === country)[role]));
    setMax(calcAvg("max", data.find((d) => d.optionValue === country)[role]));
  }, [country, role]);

  return (
    <div className={style.footer}>
      <div className={style.placeholder}>Average</div>
      <div className={style.item}>
        {min}
        {country === "usa" ? " $" : " €"}
      </div>
      <div className={style.item}>
        {med}
        {country === "usa" ? " $" : " €"}
      </div>
      <div className={style.item}>
        {max}
        {country === "usa" ? " $" : " €"}
      </div>
    </div>
  );
}

export default TableFooter;
