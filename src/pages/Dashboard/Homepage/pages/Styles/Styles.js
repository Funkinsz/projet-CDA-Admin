import { NavLink } from "react-router-dom";
import styles from "../User/user.module.scss"
import s from "../../../homepage.module.scss";

export default function Styles() {
    return (
        <div className={`${s.contain} ${styles.contain}`}>
            <NavLink to={"/styles"}>

            </NavLink>
        </div>
    )
}