import React from "react";
import "./Form.css";
import useForm from "./useForm";
import ValidateInfo from "./ValidateInfo";

function SignUp() {
  const { handleChange, data, handleSubmit, errors } = useForm(ValidateInfo);

  return (
    <div>
      <h1>Register</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form__row">
            <input
              type="text"
              name="firstname"
              placeholder="First Name "
              value={data.firstname}
              onChange={handleChange}
              className={`${errors.firstname} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={data.lastname}
              onChange={handleChange}
              className={`${errors.lastname} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={data.email}
              onChange={handleChange}
              className={`${errors.email} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
            />
            <input
              type="DOB"
              name="DOB"
              placeholder="Date Of Birth (YYYY-MM-DD)"
              value={data.DOB}
              onChange={handleChange}
              className={`${errors.DOB} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
            />

            <input
              type="number"
              name="phone"
              placeholder="966 57452455"
              value={data.phone}
              onChange={handleChange}
              className={`${errors.phone} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              placeholder="Password *"
              value={data.password}
              onChange={handleChange}
              className={`${errors.password} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
            />
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password *"
              value={data.password2}
              onChange={handleChange}
              className={`${errors.password2} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
            />
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
