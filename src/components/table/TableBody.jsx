import TableRow from "./TableRow";
import { useState, useEffect } from "react";
import { data } from "../../data/data";

function TableBody({ country, role }) {
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const tmpData = data.find((d) => d.optionValue === country)[role];
    setCurrentData(tmpData);
  }, [country, role]);

  return (
    <div>
      {currentData.map((row) => (
        <TableRow key={row.id} {...row} />
      ))}
    </div>
  );
}

export default TableBody;
