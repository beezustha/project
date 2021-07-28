import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Axios from "axios";

function Login() {
  //   const url = "localhost:8080/api/v1/public/register";
  const history = useHistory();
  const [data, setData] = useState({
    phoneNumber: "",
    password: "",
  });

  const [valid, setValid] = useState(true);

  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    Axios.get("http://localhost:8080/api/v1/public/signIn", data)
      .then((response) => {
        console.log(response);
        if (response.status == "200") {
          history.push("/");
        } else {
          history.push("/login");
        }
        localStorage.setItem("user", response.data.token);
      })
      .catch((e) => {
        console.log(e);
        setValid(false);
      });
  }
  return (
    <Container>
      <div className="textCenter">
        <form className="form_signIn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="lock"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>

          <h2
            style={{
              padding: "10px 0 10px 0",
              color: "black",
              fontSize: "20px",
            }}
          >
            Login
          </h2>

          <input
            id="phoneNumber"
            type="text"
            className="form-field"
            placeholder="Phone Number"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleChange}
          />

          <input
            id="password"
            name="password"
            className="form-field"
            onChange={handleChange}
            value={data.password}
            placeholder="Password"
            type="password"
          />

          <br />
          <br />

          <a href="/signUp">
            <p
              style={{
                padding: "10px 0 10px 0",
                color: "black",
                fontSize: "20px",
              }}
            >
              Register
            </p>
          </a>

          <br />

          <Button
            variant="flat"
            size="xm"
            type="submit"
            className="submit-btn"
            onClick={handleSubmit}
          >
            {" "}
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
