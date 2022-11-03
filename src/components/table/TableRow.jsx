import style from "./TableRow.module.css";

function TableRow({ title, min, med, max }) {
  return (
    <div className={style.row}>
      <div className={style.title}>{title}</div>
      <div className={style.col}>{min}</div>
      <div className={style.col}>{med}</div>
      <div className={style.col}>{max}</div>
    </div>
  );
}

export default TableRow;
