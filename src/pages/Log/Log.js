import s from "./log.module.scss";
import p1 from "../../assets/images/p1.jpeg";
import p2 from "../../assets/images/p2.jpeg";
import p3 from "../../assets/images/p3.jpeg";
import p4 from "../../assets/images/p4.jpeg";
import p5 from "../../assets/images/p5.jpeg";
import p6 from "../../assets/images/p6.webp";
import p7 from "../../assets/images/p7.jpeg";
import p8 from "../../assets/images/p8.jpeg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { useContext } from "react";

export default function Log() {
  const { signin, admin } = useContext(AuthContext);
  const r = Math.floor(Math.random() * 8);

  console.log(admin);


  const p = [p1, p2, p3, p4, p5, p6, p7, p8];

  document.body.style.overflow = "hidden";

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Ce champs doit être saisi")
      .email("Email non valide"),
    password: yup
      .string()
      .required("Ce champs doit etre saisi")
      .min(8, "Le mot de passe doit contenir 8 caractère minimum"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({ initialValues, resolver: yupResolver(validationSchema) });

  const submit = handleSubmit(async (v) => {
    try {
      clearErrors();
      await signin(v);
    } catch (error) {
      setError("generic", {
        type: "generic",
        message: "Email ou mot de passe incorrect",
      });
    }
  });

  return (
    <>
      {admin ? (
        <Navigate to="/homepage" />
      ) : (
        <div className={`${s.content} d-flex flex-fill flex-column aic jcc`}>
          <img src={p[r]} alt="" />

          <form
            onSubmit={submit}
            className={`${s.form} d-flex aic flex-column p20`}>
            <h1 className="m10">Connexion</h1>

            <div className={`${s.block} d-flex flex-column`}>
              <label htmlFor="email">Email</label>
              <input type="text" {...register("email")} />
            </div>

            <div className={`${s.block} d-flex flex-column`}>
              <label htmlFor="password">Mot de passe</label>
              <input type="password" {...register("password")} />
            </div>

            {errors.generic && (
              <p className="error">{errors.generic.message}</p>
            )}

            <button disabled={isSubmitting} className={`${s.btn} m10`}>
              Connexion
            </button>
          </form>
        </div>
      )}
    </>
  );
}
