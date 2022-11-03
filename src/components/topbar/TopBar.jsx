import style from "./TopBar.module.css";

function TopBar(props) {
  return (
    <div className={style.topbar}>
      <h1 className={style.h1}>Salary Guide</h1>
      <select className={style.select} onChange={props.onCountrySelection}>
        <option value="usa">🇺🇸 USA</option>
        <option value="switzerland">🇨🇭 Switzerland</option>
        <option value="austria">🇦🇹 Austria</option>
        <option value="germany">🇩🇪 Germany</option>
        <option value="denmark">🇩🇰 Denmark</option>
        <option value="netherlands">🇳🇱 Netherlands</option>
        <option value="norway">🇳🇴 Norway</option>
        <option value="sweden">🇸🇪 Sweden</option>
        <option value="finland">🇫🇮 Finland</option>
        <option value="ireland">🇮🇪 Ireland</option>
        <option value="luxembourg">🇱🇺 Luxembourg</option>
        <option value="belgium">🇧🇪 Belgium</option>
        <option value="france">🇫🇷 France</option>
        <option value="italy">🇮🇹 Italy</option>
        <option value="hungary">🇭🇺 Hungary</option>
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
