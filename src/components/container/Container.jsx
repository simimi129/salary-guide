import Table from "../table/Table";
import TopBar from "../topbar/TopBar";
import style from "./Container.module.css";
import { useState } from "react";

function Container() {
  const [country, setCountry] = useState("usa");
  const [role, setRole] = useState("frontend");

  function handleCountrySelection({ target }) {
    setCountry(target.value);
  }

  function handleRoleSelection({ target }) {
    setRole(target.value);
  }

  return (
    <div className={style.container}>
      <TopBar
        country
        role
        onCountrySelection={handleCountrySelection}
        onRoleSelection={handleRoleSelection}
      />
      <Table country={country} role={role} />
    </div>
  );
}

export default Container;
