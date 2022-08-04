import React, { useState } from "react";
import { useLoginMutation } from "../../redux/api";
import { Redirect } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading, data, error }] = useLoginMutation();
  console.log(useLoginMutation());

  if (data) {
    console.log(data)
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <h1>Login</h1>

      {/* {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <br />
      <br />

      <button onClick={() => login(email,password)}>
        Login
      </button>

      <p style={{ fontSize: "0.7rem", marginTop: "70px" }}>
        <b>Test account:</b>
        <br />
        <i>admin@gmail.com</i>
        <br />
        <i>admin</i>
      </p>
    </>
  );
};

export default Login;
