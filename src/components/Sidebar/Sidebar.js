import { NavLink } from "react-router-dom";
import s from "../../pages/Dashboard/homepage.module.scss";

export default function Sidebar() {
  return (
    <>
      <div className={`${s.sidebar} d-flex jcc`}>
        <div className={`${s.sticky}`}>

        <ul className="d-flex flex-column">
          <NavLink className={`${s.asbar} d-flex aic m10`}>
            <i className="fa-solid fa-gauge-high"></i>
            <span className="secondary">DASHBOARD</span>
          </NavLink>
          <NavLink className={`${s.asbar} d-flex aic m10`}>
            <i className="fa-solid fa-chart-line"></i>
            <span className="secondary">CHARTS</span>
          </NavLink>
          <NavLink className={`${s.asbar} d-flex aic m10`}>
            <i className="fa-solid fa-table"></i>
            <span className="secondary">TABLES</span>
          </NavLink>

          <span className="p20"></span>

          <NavLink to={"/user"} className="d-flex aic jcsb m10">
            <span className="secondary">USERS</span>
            <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
          <NavLink to={"/adds"} className="d-flex aic jcsb m10">
            <span className="secondary">ADDS</span>
            <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
          <NavLink to={"/styles"} className="d-flex aic jcsb m10">
            <span className="secondary">STYLES</span>
            <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
        </ul>
        </div>
      </div>
    </>
  );
}
