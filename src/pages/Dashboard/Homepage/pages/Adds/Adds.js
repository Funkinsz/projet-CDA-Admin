import styles from "../User/user.module.scss";
import s from "../../../homepage.module.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteAdd, getAdds, updateAdd } from "../../../../../apis/adds";
import OneAdds from "./components/OneAdd";

export default function Adds() {
  const [a, setA] = useState([]);

  useEffect(() => {
    async function adds() {
      try {
        const allAdds = await getAdds();
        setA(allAdds);
      } catch (error) {
        console.error(error);
      }
    }
    adds();
  }, []);

  async function updateOneAdd(v) {
    await updateAdd(v);
    const allAdds = await getAdds();
    setA(allAdds);
  }

  async function deleteOneAdd(v) {
    await deleteAdd(v);
    const allAdds = await getAdds();
    setA(allAdds);
  }

  console.log(a);

  return (
    <div className={`${s.contain} ${styles.contain}`}>
      <NavLink to="/adds">
        <h2 className={`${s.title} secondary`}>ADDS</h2>
      </NavLink>

      <div className={`${styles.table_container} d-flex flex-fill aic jcc`}>
        <table className="d-flex flex-column jcsb">
          <thead>
            <tr className="d-flex jcsb">
              <th className={`${styles.td_id}`}>ID</th>
              <th>TITLE</th>
              <th className={`${styles.td_content}`}>CONTENT</th>
              <th className={`${styles.td_id}`}>PRICE</th>
              <th className={`${styles.td_id}`}>SONO</th>
              <th className={`${styles.td_id}`}>ART</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className="d-flex flex-column jcsb">
            {a &&
              a.map((a, i) => (
                <OneAdds
                  add={a}
                  key={i}
                  updateOneAdd={updateOneAdd}
                  deleteOneAdd={deleteOneAdd}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
