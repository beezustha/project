import React, { useState } from "react";

const useForm = (validate) => {
  const [loginData, setLoginData] = useState({
    phoneNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(loginData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(loginData));
  };

  return { handleChange, loginData, handleSubmit, errors };
};

export default useForm;
