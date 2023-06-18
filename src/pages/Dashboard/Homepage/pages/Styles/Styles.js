import { NavLink } from "react-router-dom";
import styles from "../User/user.module.scss";
import s from "../../../homepage.module.scss";
import { useEffect, useState } from "react";
import { addStyle, getStyles, updateStyle } from "../../../../../apis/styles";
import OneStyle from "./components/oneStyle";

export default function Styles() {
  const [st, setSt] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function styles() {
      try {
        const allStyle = await getStyles();
        setSt(allStyle);
      } catch (error) {
        console.error(error);
      }
    }
    styles();
  }, []);

  async function updateOneStyle(v) {
    await updateStyle(v);
    const allStyle = await getStyles();
    setSt(allStyle);
  }

  function handleChange(e) {
    const addValue = e.target.value;
    setValue(addValue);
  }

  async function addOneStyle() {
    await addStyle(value);
    const allStyle = await getStyles();
    setSt(allStyle);
  }

  async function handleClick() {
    if (value.length) {
      addOneStyle();
    }
  }

  function handleKey(e) {
    if (e.taget === "Enter" && value.length) {
      addOneStyle();
    }
  }

  async function handleClear() {
    setValue("")
  }

  return (
    <div className={`${s.contain} ${styles.contain}`}>
      <NavLink to={"/styles"}>
        <h2 className={`${s.title} secondary`}>STYLES</h2>
      </NavLink>

      <div
        className={`${styles.table_container} d-flex flex-column flex-fill aic jcc`}
      >
        <div className={`${styles.add_input} d-flex jcsb`}>
          <div className={`${styles.search} d-flex aic jcc`}>
            <input type="text" placeholder="Search..." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="d-flex aic jcc">
            <input
              value={value}
              type="text"
              onChange={handleChange}
              onKeyDown={handleKey}
              placeholder="New Style"
            />
            <button onClick={handleClick} className={`${styles.btn_success}`}>
              <i className="fa-solid fa-check"></i>
            </button>
            <button onClick={handleClear} className={`${styles.btn_delete}`}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <table className="d-flex flex-column jcsb">
          <thead>
            <tr className="d-flex jcsb">
              <th className={`${styles.td_id}`}>ID</th>
              <th className={`${styles.td_content}`}>NAME</th>
              <th className={`${styles.td_id}`}>ACTIONS</th>
            </tr>
          </thead>
          <tbody className="d-flex flex-column jcsb">
            {st &&
              st.map((a, i) => (
                <OneStyle style={a} key={i} updateOneStyle={updateOneStyle} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}