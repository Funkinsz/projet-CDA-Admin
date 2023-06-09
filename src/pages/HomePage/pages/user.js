import s from "../homepage.module.scss";
import styles from "./user.module.scss";

export default function User() {
  console.log("user");
  return (
    <div className={`${s.contain} ${styles.contain}`}>
      <h2 className={`${s.title} secondary`}>USERS</h2>
    </div>
  );
}
