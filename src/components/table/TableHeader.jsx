import style from "./TableHeader.module.css";

function TableHeader() {
  return (
    <div className={style.header}>
      <div className={style.placeholder}></div>
      <div className={style.item}>Minimum</div>
      <div className={style.item}>Median</div>
      <div className={style.item}>Maximum</div>
    </div>
  );
}

export default TableHeader;
