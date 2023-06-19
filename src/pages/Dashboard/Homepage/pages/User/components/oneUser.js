import { useState } from "react";
import s from "../user.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function OneUser({ user, key, updateOneUser, banOneUser }) {
  const [edit, setEdit] = useState(false);
  const [alertBan, setAlertBan] = useState(false);
  const [alertDeban, setAlertDeban] = useState(false);

  const validationSchema = yup.object({
    id_user: yup.number(),
    surname: yup.string().min(2, "Au moins 2 caractère"),
    email: yup.string().email("Email non valide"),
    name: yup.string().min(2, "Au moins 2 caractère"),
    firstname: yup.string().min(2, "Au moins 2 caractère"),
    type: yup.string().required("Ce champs doit etre saisi"),
  });

  const initialValues = {
    id_user: user.id_user,
    surname: user.surname,
    email: user.email,
    name: user.name,
    firstname: user.firstname,
    type: user.user_type,
  };

  const submit = async (v) => {
    updateOneUser(v);
    setEdit(!edit);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (v) => {
    submit(v);
  };

  function handleEdit() {
    setEdit(!edit);
  }

  function verifyBan() {
    setAlertBan(!alertBan);
  }

  function verifyDeban() {
    setAlertDeban(!alertDeban);
  }

  function handleCancel() {
    setAlertBan(!alertBan);
  }

  function handleCancelD() {
    setAlertDeban(!alertDeban);
  }

  function handleBan() {
    banOneUser(user);
    setAlertBan(!alertBan);
  }

  function handleDeban() {
    banOneUser(user);
    setAlertDeban(!alertDeban);
  }

  return (
    <>
      {alertBan === true && (
        <div className={`${s.alert} d-flex flex-column aic`}>
          <div className={`${s.head} d-flex aic jcc`}>
            <i className="fas fa-circle-info"></i>
            <h2>BANNISSEMENT D'UTILISATEUR</h2>
          </div>
          <h4 className="d-flex flex-column aic jcc">
            Attention ! vous etes sur le point de bannir :
            <strong>
              {user.surname} : {user.email}
            </strong>
          </h4>
          <div className={`${s.btn} d-flex`}>
            <button onClick={handleBan} className={`${s.btn_active}`}>
              BANNIR
            </button>
            <button onClick={handleCancel} className={`${s.btn_cancel}`}>
              ANNULER
            </button>
          </div>
        </div>
      )}
      {alertDeban === true && (
        <div className={`${s.alert} d-flex flex-column aic`}>
          <div className={`${s.head} d-flex aic jcc`}>
            <i className="fas fa-circle-info"></i>
            <h2>DEBANNISSEMENT D'UTILISATEUR</h2>
          </div>
          <h4 className="d-flex flex-column aic jcc">
            Attention ! vous etes sur le point de retirer le bannissement de :
            <strong>
              {user.surname} : {user.email}
            </strong>
          </h4>
          <div className={`${s.btn} d-flex`}>
            <button onClick={handleDeban} className={`${s.btn_active}`}>
              RETIRER
            </button>
            <button onClick={handleCancelD} className={`${s.btn_cancel}`}>
              ANNULER
            </button>
          </div>
        </div>
      )}
      {edit === false ? (
        <tr className="d-flex jcsb">
          <td
            className={`${user.user_role < 0 ? `danger` : ""} ${s.td_id}`}
            key={key}>
            {user.id_user}
          </td>
          <td
            className={`${user.user_role < 0 ? `danger` : ""} d-flex jcc aic ${s.role}`}>
            {user.user_role > 0 && <i className="fa-solid fa-crown"></i>}
            {user.surname}
          </td>
          <td className={user.user_role < 0 ? `danger` : ""}>{user.email}</td>
          <td className={user.user_role < 0 ? `danger` : ""}>{user.name}</td>
          <td className={user.user_role < 0 ? `danger` : ""}>
            {user.firstname}
          </td>
          <td className={user.user_role < 0 ? `danger` : ""}>
            {user.user_type}
          </td>
          <td>
            <button onClick={handleEdit} className={`${s.btn_update} ${s.btn}`}>
              <i className="fa-solid fa-user-pen"></i>
            </button>
            {user.user_role >= 0 ? (
              <button
                onClick={verifyBan}
                className={`${s.btn_delete} ${s.btn}`}>
                <i className="fa-solid fa-user-slash"></i>
              </button>
            ) : (
              <button
                onClick={verifyDeban}
                className={`${s.btn_warning} ${s.btn}`}>
                <i className="fa-solid fa-user-check"></i>
              </button>
            )}
          </td>
        </tr>
      ) : (
        <tr className="d-flex jcsb">
          <td key={key} className={s.td_id}>
            <input
              type="text"
              {...register("id_user")}
              defaultValue={user.id_user}
              style={{ visibility: "hidden", position: "absolute" }}
            />
            {user.id_user}
          </td>
          <td className="flex-column">
            <input
              {...register("surname")}
              defaultValue={initialValues.surname}
              type="text"
              required
            />
            {errors?.surname && (
              <p className="danger">{errors.surname.message}</p>
            )}
          </td>
          <td>
            <input
              {...register("email")}
              defaultValue={initialValues.email}
              type="text"
              required
            />
            {errors?.email && <p className="danger">{errors.email.message}</p>}
          </td>
          <td>
            <input
              {...register("name")}
              defaultValue={initialValues.name}
              type="email"
              required
            />
            {errors?.name && <p className="danger">{errors.name.message}</p>}
          </td>
          <td>
            <input
              {...register("firstname")}
              defaultValue={initialValues.firstname}
              type="text"
              required
            />
            {errors?.firstname && (
              <p className="danger">{errors.firstname.message}</p>
            )}
          </td>
          <td>
            <select name="type" {...register("type")} required>
              {user.user_type === "pro" ? (
                <>
                  <option value="pro">pro</option>
                  <option value="perso">perso</option>
                </>
              ) : (
                <>
                  <option value="perso">perso</option>
                  <option value="pro">pro</option>
                </>
              )}
            </select>
            {errors?.type && <p className="danger">{errors.type.message}</p>}
          </td>
          <td>
            <button
              onClick={handleSubmit(onSubmit)}
              className={`${s.btn_update} ${s.btn}`}>
              <i className="fa-solid fa-check"></i>
            </button>
            <button
              onClick={handleEdit}
              type="button"
              className={`${s.btn_delete} ${s.btn}`}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
