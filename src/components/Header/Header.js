import { NavLink } from "react-router-dom";
import s from '../../pages/HomePage/homepage.module.scss'

export default function Header() {
  return (
    <nav className="d-flex aic jcsb">
      <h1 className="m10">ESPACE ADMIN</h1>
      <ul className="d-flex">
        <NavLink className="m20">
          <i className="fa-solid fa-bell"></i>
        </NavLink>
        <NavLink className="m20">
          <i className="fa-solid fa-envelope"></i>
        </NavLink>
        <div className={`${s.search} d-flex jcc m10`}>
          <input type="text" placeholder="search..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <NavLink className="m20">
          <i className="fa-solid fa-right-from-bracket"></i>
        </NavLink>
      </ul>
    </nav>
  );
}
