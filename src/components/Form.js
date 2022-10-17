import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../App.css";
import axios from "axios";
import Swal from "sweetalert2";

const Form = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
    ime: yup.string().required(),
    prezime: yup.string().required(),
    broj: yup.string().min(9).required(),
    grad: yup.string().required()
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
      <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>Registracija</h1>
        <p> Ja sam </p> 
        <input type="radio" id="fl"/>
        <label htmlFor="fl" className="check">Fizičko Lice</label>
        <input type="radio" id="pl"/>
        <label htmlFor="pl">Pravno Lice</label>
        <div className="names">
        <input className="input" type="text" placeholder="Ime" {...register("ime")} required />
        <input
          className="input"
          type="text"
          placeholder="Prezime"
          {...register("prezime")}
          required
        />{" "}
        </div>
        <br />
        <div className="grad-tel">
        <input className="input" type="text" placeholder="Grad" {...register("grad")} required />
        <p className="error">{errors.grad?.message}</p>
        <input
          className="input"
          type="text"
          placeholder="Telefon"
          {...register("broj")}
          required
        />{" "}
        </div>
        <br />
        <p className="error">{errors.password?.message}</p>
        <div className="mail-pass">
        <input className="input" type="text" placeholder="Email" {...register("email")} required />
        <p className="error">{errors.email?.message}</p>
        <input
          className="input"
          type="password"
          placeholder="Password"
          {...register("password")}
          required
        />{" "}
        </div>
        <br />
        <p className="error">{errors.password?.message}</p>
        <button className="button">Registruj se</button>
        <strong>Registrovan korisnik?</strong> <br/>
        <a href="#">Prijavi se ovdje</a>
      </form>
    </div>
  );
};

export default Form;