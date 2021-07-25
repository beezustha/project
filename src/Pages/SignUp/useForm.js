import axios from "axios";
import React, { useState } from "react";
import Axios from "axios";
const useForm = (validate) => {
  const url = "";
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    DOB: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(data));
    Axios.post(url, {
      name: data.name,
      date: data.date,
      iduser: parseInt(data.iduser),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      DOB: data.DOB,
    }).then((res) => {
      console.log(res);
    });
  };
  console.log(data);

  return { handleChange, data, handleSubmit, errors };
};

export default useForm;
