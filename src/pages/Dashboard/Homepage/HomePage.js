import { useContext } from "react";
import { AuthContext } from "../../../context";
import s from "../homepage.module.scss";
import { Link, NavLink } from "react-router-dom";

export default function HomePage() {
  const { admin } = useContext(AuthContext);

  console.log(admin);
  return (
    <div className="p20 d-flex jcsa flex-wrap">
      <div className={`${s.card} little-bs m20`}>
        <NavLink to="/user">
          <div className={`${s.card_header} ${s.background_primary} d-flex aic jcsb p20`}>
            <h2>USERS</h2>
            <i className="fa-solid fa-user"></i>
          </div>
          <div className={`${s.card_unset} ${s.background_primary} d-flex aic jcsb p20`}>
            <h4>View details</h4>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </NavLink>
      </div>

      <div className={`${s.card} little-bs m20`}>
        <NavLink to='/adds'>
          <div className={`${s.card_header} ${s.background_success} d-flex aic jcsb p20`}>
            <h2>ADDS</h2>
            <i className="fa-solid fa-calendar-check"></i>
          </div>
          <div className={`${s.card_unset} ${s.background_success} d-flex aic jcsb p20`}>
            <h4>View details</h4>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </NavLink>
      </div>

      <div className={`${s.card} little-bs m20`}>
        <NavLink>
          <div className={`${s.card_header} ${s.background_danger} d-flex aic jcsb p20`}>
            <h2>BILLS</h2>
            <i className="fa-solid fa-credit-card"></i>
          </div>
          <div className={`${s.card_unset} ${s.background_danger} d-flex aic jcsb p20`}>
            <h4>View details</h4>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </NavLink>
      </div>

      <div className={`${s.card} little-bs m20`}>
        <Link
          target="_blank"
          to="https://analytics.google.com/analytics/web/#/p383126697/reports/intelligenthome"
        >
          <div className={`${s.card_header} ${s.background_warning} d-flex aic jcsb p20`}>
            <h2>GOOGLE ANALYTICS</h2>
            <i className="fa-brands fa-google"></i>
          </div>
          <div className={`${s.card_unset} ${s.background_warning} d-flex aic jcsb p20`}>
            <h4>View details</h4>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}
