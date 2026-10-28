import { useState } from "react";
import { NavLink } from "react-router";
import GoogleImage from "../../src/assets/logo-google.png";
import "../../style/login.css";

function Field({ id, label, isError, errorMsg, children }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {children}
      {isError && <span className="form-error">{errorMsg}</span>}
    </div>
  );
}

function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorUsername(username === "");
    setErrorPassword(password === "");
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Field
        id="username"
        label="Username"
        isError={errorUsername}
        errorMsg="Username is required"
      >
        <input
          className="form-input"
          type="text"
          id="username"
          placeholder="Input username"
          onChange={handleUsername}
        />
      </Field>
      <Field
        id="password"
        label="password"
        isError={errorPassword}
        errorMsg="Password is required"
      >
        <input
          className="form-input"
          type="password"
          id="password"
          placeholder="Input password"
          onChange={handlePassword}
        />
      </Field>

      <div className="form-info-wrapper">
        <span className="body-small-regular">
          Belum punya akun?{" "}
          <NavLink className="body-small-regular" to="/register">
            Daftar
          </NavLink>
        </span>
        <a className="body-small-regular" href="">
          Lupa kata sandi?
        </a>
      </div>
      <div className="form-action">
        <button
          className="btn-secondary-contained body-small-semibold"
          style={{ width: "100%" }}
          type="submit"
        >
          Masuk
        </button>
        <span className="body-small-medium">Atau</span>
        <button
          className="btn-secondary-outlined body-small-semibold"
          style={{ width: "100%" }}
        >
          <img className="btn-logo" src={GoogleImage} alt="Google" />
          Masuk dengan Google
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
