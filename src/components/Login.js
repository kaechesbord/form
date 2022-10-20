import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../App.css";
import axios from "axios";
import Swal from "sweetalert2";
import {Link} from "react-router-dom"


const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    console.log({ data });
    postUser(data);
    reset();
  };
  const postUser = async (data) => {
    await axios
      .post("https://api.enovaapp.com/login", data)
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Email!",
        });
      });
  };
  return (
    <div className="position">
      <form className="login-form" onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>Ulogiraj se</h1>
        <input className="input" type="text" placeholder="Email" {...register("email")} required />
        <p className="error">{errors.email?.message}</p>
        <br />
        <input
          className="input"
          type="password"
          placeholder="Password"
          {...register("password")}
          required
        />{" "}
        <br />
        <p className="error">{errors.password?.message}</p>
        <button className="button">Ulogiraj se</button>
        <strong>Nemaš korisnički račun?</strong> <br/>
        <Link to="/">Registruj se ovdje</Link>
      </form>
    </div>
  );
};

export default Login;