import s from "../../User/user.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function OneAdds({ add, key, updateOneAdd, deleteOneAdd }) {
  const [edit, setEdit] = useState(false);
  const [check, setCheck] = useState(add.sono === 1 ? true : false);
  const [alertDelete, setAlertDelete] = useState(false)

  const validationSchema = yup.object({
    id: yup.number(),
    title: yup.string().required("Ce champs doit etre saisi"),
    content: yup.string().required("Ce champs doit etre saisi"),
    price: yup.number().required("Ce champs doit etre saisi"),
    sono: yup.boolean(),
    art: yup.number().required("Ce champs doit etre saisi"),
  });

  const initialValues = {
    id: add.id_ad_pro,
    title: add.title_ad_pro,
    content: add.content_ad_pro,
    price: add.price_ad_pro,
    sono: add.sono,
    art: add.number_art,
  };

  const submit = async (v) => {
    updateOneAdd(v);
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

  function verifyDelete() {
    setAlertDelete(!alertDelete)
  }

  function handleDelete() {
    deleteOneAdd(add.id_ad_pro);
    setAlertDelete(!alertDelete)
  }

  function handleCancel() {
    setAlertDelete(!alertDelete)
  }

  function handleCheck() {
    setCheck(!check);
  }

  return (
    <>
          {alertDelete === true && (
        <div className={`${s.alert} d-flex flex-column aic`}>
          <div className={`${s.head} d-flex aic jcc`}>
            <i className="fas fa-circle-info"></i>
            <h2>SUPPRESSION D'EVENEMENT</h2>
          </div>
          <h4 className="d-flex flex-column aic jcc">
            Attention ! vous etes sur le point de supprimer l'évènement :
            <strong>
              {add.content_ad_pro}
            </strong>
          </h4>
          <div className={`${s.btn} d-flex`}>
            <button onClick={handleDelete} className={`${s.btn_active}`}>
              SUPPRIMER
            </button>
            <button onClick={handleCancel} className={`${s.btn_cancel}`}>
              ANNULER
            </button>
          </div>
        </div>
      )}
      {edit === false ? (
        <tr className="d-flex jcsb">
          <td key={key} className={`${s.td_id}`}>
            {add.id_ad_pro}
          </td>
          <td>{add.title_ad_pro}</td>
          <td className={`${s.td_content}`}>{add.content_ad_pro}</td>
          <td className={`${s.td_id}`}>{add.price_ad_pro} €</td>
          <td className={`${s.td_id}`}>{add.sono === 1 ? "✔️" : "❌"}</td>
          <td className={`${s.td_id}`}>{add.number_art}</td>
          <td>
            <button onClick={handleEdit} className={`${s.btn_update} ${s.btn}`}>
              <i className="fa-solid fa-calendar-plus"></i>
            </button>
            <button onClick={verifyDelete} className={`${s.btn_delete} ${s.btn}`}>
              <i className="fa-solid fa-calendar-xmark"></i>
            </button>
          </td>
        </tr>
      ) : (
        <tr className="d-flex jcsb">
          <td key={key} className={`${s.td_id}`}>
            <input
              type="text"
              {...register("id")}
              defaultValue={initialValues.id}
              style={{ visibility: "hidden", position: "absolute" }}
            />
            {add.id_ad_pro}
          </td>
          <td>
            <input
              type="text"
              {...register("title")}
              defaultValue={initialValues.title}
              required
            />
            {errors?.title && <p>{errors.title.message}</p>}
          </td>
          <td className={`${s.td_content}`}>
            <textarea
              type="text"
              {...register("content")}
              defaultValue={initialValues.content}
              required
            />
            {errors?.content && <p>{errors.content.message}</p>}
          </td>
          <td className={`${s.td_id}`}>
            <input
              type="text"
              {...register("price")}
              defaultValue={initialValues.price}
              required
            />
            {errors?.price && <p>{errors.price.message}</p>}
          </td>
          <td className={`${s.td_id}`}>
            <input type="checkbox" checked={check} onClick={handleCheck} {...register("sono")} />
          </td>
          <td className={`${s.td_id}`}>
            <input
              type="text"
              {...register("art")}
              defaultValue={initialValues.art}
              required
            />
            {errors?.art && <p>{errors.art.message}</p>}
          </td>
          <td>
            <button
              onClick={handleSubmit(onSubmit)}
              className={`${s.btn_success} ${s.btn}`}>
              <i className="fa-solid fa-check"></i>
            </button>
            <button onClick={handleEdit} className={`${s.btn_delete} ${s.btn}`}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
