import style from "./Table.module.css";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

function Table({ country, role }) {
  return (
    <div className={style.table}>
      <TableHeader />
      <TableBody country={country} role={role} />
      <TableFooter country={country} role={role} />
    </div>
  );
}

export default Table;
