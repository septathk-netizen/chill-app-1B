import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";
import "../../style/login.css";
import logo from "../../src/assets/Logo.png";
import logoGoogle from "../../src/assets/logo-google.png";
import eyeOff from "../../src/assets/eye-off.png";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login({ email: username, password });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="beground">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="title">
            <img src={logo} alt="chill app logo" />
          </div>

          <div className="title">
            <h2>masuk</h2>
            <p>selamat datang kembali</p>
          </div>

          {error && <p className="error-msg">{error}</p>}

          {/* form ini berguna untuk mengelompokan input pengguna */}
          <div className="form-group">
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="sandi1">
              <label htmlFor="password">kata sandi</label>

              <div className="input-rapper1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="masukkan kata sandi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img
                  src={eyeOff}
                  alt="eye icon"
                  onClick={() => setShowPassword((s) => !s)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          <div className="bantuan">
            <div className="punya-akun">
              <p>
                <span className="kode1">belum punya akun?</span>
                <Link to="/daftar">daftar</Link>
              </p>
              <p>
                <Link to="/forgot-password">lupa kata sandi</Link>
              </p>
            </div>
          </div>

          <div className="masuk">
            <button type="submit">masuk</button>
          </div>

          <div className="atau">
            <p>Atau</p>
          </div>

          <div className="inter">
            <button type="button">
              <img src={logoGoogle} alt="logo google" />
              <p>masuk dengan google</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
