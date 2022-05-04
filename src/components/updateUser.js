import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    age: "",
    email: "",
  });

  const onChangeForm = (e) => {
    const newForm = { ...form };
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
  };

  useEffect(() => {
    if (id) {
      axios
        .get("http://localhost:4000/users/" + id)
        .then((res) => {
          setForm({
            fName: res.data.firstName,
            lName: res.data.lastName,
            age: res.data.age,
            email: res.data.email,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const onClickButton = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/user/" + id, {
        age: form.age,
        email: form.email,
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
      <h1>Please fill in this Form: </h1>
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
      <label>
        <input
          className="input"
          name="email"
          type="text"
          placeholder="email"
          value={form.email}
          onChange={onChangeForm}
        />
      </label>
      <button className="button" onClick={onClickButton}>
        Submit
      </button>
    </form>
  );
};
