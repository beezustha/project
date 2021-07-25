import React from "react";
import useLogin from "./useLogin";
import ValidateInfo from "./LoginValidateInfo";
import "./Login.css";
function Login() {
  const { handleChange, loginData, handleSubmit, errors } =
    useLogin(ValidateInfo);
  return (
    <div>
      <div className="form">
        <h1>Login </h1>
        <form onSubmit={handleSubmit}>
          <div className="form__row">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number "
              value={loginData.phoneNumber}
              onChange={handleChange}
              className={`${errors.phoneNumber} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              className={`${errors.password} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
            />
            <button>Log In</button>
          </div>
        </form>
      </div>
      ;
    </div>
  );
}

export default Login;
