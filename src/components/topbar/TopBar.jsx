import style from "./TopBar.module.css";
import { data } from "../../data/data";
import { useEffect, useState } from "react";

function TopBar(props) {
  const [selectableCountriesData, setSelectableCountriesData] = useState([]);

  useEffect(() => {
    let tmp = [];
    for (const country of data) {
      tmp.push({
        id: country.id,
        optionValue: country.optionValue,
        name: country.name,
      });
    }
    setSelectableCountriesData(tmp);
  }, []);

  return (
    <div className={style.topbar}>
      <h1 className={style.h1}>Salary Guide</h1>
      <select className={style.select} onChange={props.onCountrySelection}>
        {selectableCountriesData.map((country) => (
          <option value={country.optionValue} key={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <select className={style.select} onChange={props.onRoleSelection}>
        <option value="frontend">Frontend</option>
        <option value="ios">IOS</option>
      </select>
      <span className={style.money}>💸</span>
    </div>
  );
}

export default TopBar;
