import styles from "./user.module.scss";
import s from "../../homepage.module.scss";
import { NavLink } from "react-router-dom";
import { getUsers } from "../../../../apis/users";
import { useEffect, useState } from "react";

export default function User() {
  const [u, setU] = useState([]);

  const users = async () => {
    try {
      const allUser = await getUsers();
      setU(allUser);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    users();
  }, []);

  console.log(u);

  return (
    <div className={`${s.contain} ${styles.contain}`}>
      <NavLink to="/user">
        <h2 className={`${s.title} secondary`}>USERS</h2>
      </NavLink>

      <div className={`${styles.table_container} d-flex flex-fill aic jcc`}>
        <table className="d-flex flex-column jcsb">
          <thead>
            <tr className="d-flex jcsb">
              <th>ID</th>
              <th>PSEUDO</th>
              <th>EMAIL</th>
              <th>NOM</th>
              <th>PRENOM</th>
              <th>TYPE</th>
            </tr>
          </thead>
          <tbody className="d-flex flex-column jcsb">
            {u &&
              u.map((a, i) => (
                <tr className="d-flex jcsb">
                  <td>{a.id_user}</td>
                  <td>{a.surname}</td>
                  <td>{a.email}</td>
                  <td>{a.name}</td>
                  <td>{a.firstname}</td>
                  <td>{a.user_type}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
