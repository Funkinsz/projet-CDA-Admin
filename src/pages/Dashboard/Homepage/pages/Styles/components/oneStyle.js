import { useState } from "react";
import s from "../../User/user.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function OneStyle({ style, key, updateOneStyle }) {
  const [edit, setEdit] = useState(false);

  const validationSchema = yup.object({
    id: yup.number(),
    name: yup.string().required("Ce champs est obligatoire"),
  });

  const initialValues = {
    id: style.id_style,
    name: style.name_style,
  };

  const submit = async (v) => {
    updateOneStyle(v);
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

  return (
    <>
      {edit === false ? (
        <tr className={`d-flex jcsb`}>
          <td key={key} className={`${s.td_id}`}>{style.id_style}</td>
          <td className={`${s.td_content}`}>{style.name_style}</td>
          <td className={`${s.td_id}`}>
            <button onClick={handleEdit} className={`${s.btn_update} ${s.btn}`}>
              <i className="fa-solid fa-pen"></i>
            </button>
          </td>
        </tr>
      ) : (
        <tr className={`d-flex jcsb`}>
          <td className={`${s.td_id}`}>
            <input
              type="text"
              {...register("id")}
              defaultValue={initialValues.id}
              style={{ visibility: "hidden", position: "absolute" }}
            />
            {style.id_style}
            {errors?.name && <p>{errors.name.message}</p>}
          </td>
          <td className={`${s.td_content}`}>
            <input
              type="text"
              {...register("name")}
              defaultValue={initialValues.name}
              required
            />
          </td>
          <td className={`${s.td_id}`}>
            <button onClick={handleSubmit(onSubmit)} className={`${s.btn_success} ${s.btn}`}>
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
