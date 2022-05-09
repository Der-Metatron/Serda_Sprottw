import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    age: "",
  });

  const onChangeForm = (e) => {
    const newForm = { ...form };
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
  };

  const onClickButton = (e) => {
    e.preventDefault();
    axios
      .post("https://backend-serdar-sprotte.herokuapp.com/users/new", {
        age: form.age,

        firstName: form.fName,
        lastName: form.lName,
      })
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        alert("This site is not available!");
      });
  };

  return (
    <form className="form">
      <br />
      <br />
      <label>
        <input
          className="input"
          name="fName"
          type="text"
          placeholder="firstName"
          value={form.fName}
          onChange={onChangeForm}
        />
      </label>
      <label>
        <input
          className="input"
          name="lName"
          type="text"
          placeholder="lastName"
          value={form.lName}
          onChange={onChangeForm}
        />
      </label>
      <label>
        <input
          className="input"
          name="age"
          type="number"
          placeholder="age"
          value={form.age}
          onChange={onChangeForm}
        />
      </label>

      <button className="button" onClick={onClickButton}>
        Abschicken
      </button>
    </form>
  );
};
