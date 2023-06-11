import { NavLink } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import s from "./homepage.module.scss";
import Header from "../../components/Header/Header";

export default function Dashboard() {
  return (
    <div className={`${s.content}`}>
      <Header />
      <div className={`${s.container} d-flex flex-fill`}>
        <Sidebar />
        <div className={`${s.contain}`}>
          <NavLink to="/">
            <h2 className={`${s.title}`}>HOMEPAGE</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
