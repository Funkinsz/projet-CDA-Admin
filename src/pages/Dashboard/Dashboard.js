import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import s from "./homepage.module.scss";
import Header from "../../components/Header/Header";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" && navigate("/homepage");
  })

  return (
    <div className={`${s.content} d-flex flex-column`}>
      <Header />
      <div className={`${s.container} d-flex`}>
        <Sidebar />
        <div className={`${s.contain}`}>
          <NavLink to="/homepage">
            <h2 className={`${s.title}`}>HOMEPAGE</h2>
          </NavLink>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
