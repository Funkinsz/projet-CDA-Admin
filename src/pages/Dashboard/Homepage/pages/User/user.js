import styles from "./user.module.scss";
import s from "../../../homepage.module.scss";
import { NavLink } from "react-router-dom";
import { banUser, getUsers, updateUser } from "../../../../../apis/users";
import { useEffect, useState } from "react";
import OneUser from "./components/oneUser";

export default function User() {
  const [u, setU] = useState([]);

  useEffect(() => {
    async function users() {
      try {
        const allUser = await getUsers();
        setU(allUser);
      } catch (error) {
        console.error(error);
      }
    }
    users();
  }, []);

  async function updateOneUser(v) {
    await updateUser(v);
    const allUser = await getUsers();
    setU(allUser);
  }

  async function banOneUser(v) {
    await banUser(v);
    const allUser = await getUsers();
    setU(allUser);
  }

  return (
    <div className={`${styles.contain}`}>
      <NavLink to="/user">
        <h2 className={`${s.title} secondary`}>USERS</h2>
      </NavLink>

      <div className={` d-flex flex-fill aic jcc`}>
        <table className="d-flex flex-column jcsb">
          <thead>
            <tr className="d-flex jcsb">
              <th className={`${styles.td_id}`}>ID</th>
              <th>PSEUDO</th>
              <th>EMAIL</th>
              <th>NOM</th>
              <th>PRENOM</th>
              <th>TYPE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className="d-flex flex-column jcsb">
            {u &&
              u.map((a, i) => (
                <OneUser
                  user={a}
                  key={i}
                  updateOneUser={updateOneUser}
                  banOneUser={banOneUser}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
