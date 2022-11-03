import style from "./Chart.module.css";
import { data } from "../../data/data";
import { useEffect, useState } from "react";
import { calcAvg } from "../../utilities/average";

function Chart({ country, role }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    let tmp = [];
    for (const country of data) {
      tmp.push({
        id: country.id,
        name: country.optionValue.slice(0, 3),
        avg: calcAvg("med", country[role]),
      });
    }
    setCountriesData(tmp);
  }, [country, role]);

  return (
    <div className={style.chart}>
      <div className={style.top}>
        {countriesData.map((country) => (
          <div
            className={style.col}
            key={country.id}
            style={{
              height: (country.avg / 110000) * 400 + "px",
              background:
                role === "ios" ? "var(--color-accent)" : "var(--color-money)",
            }}
          ></div>
        ))}
      </div>
      <div className={style.bottom}>
        {countriesData.map((country) => (
          <span className={style.flag} key={country.id}>
            {country.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Chart;
