import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";
import "../../style/Daftar.css";
import logo from "../../src/assets/Logo.png";
import logoGoogle from "../../src/assets/logo-google.png";
import eyeOff from "../../src/assets/eye-off.png";

function Daftar() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("kata sandi minimal 6 karakter");
      return;
    }
    if (password !== confirm) {
      setError("konfirmasi kata sandi tidak sama");
      return;
    }

    try {
      // pakai username sebagai email unik (localStorage butuh identifier)
      register({ nama: username, email: username, password });
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
            <h2>daftar</h2>
            <p>ayolah, daftarkan dirimu</p>
          </div>

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

            <div className="sandi">
              <label htmlFor="password">kata sandi</label>
              <div className="input-rapper">
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
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>

            <div className="sandi">
              <span className="konfirmasi">
                <label htmlFor="konfirmasi-password">konfirmasi kata sandi</label>
              </span>
              <div className="input-rapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="konfirmasi-password"
                  name="konfirmasi-password"
                  placeholder="masukkan kata sandi"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                />
                <img
                  src={eyeOff}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>

            {error && <p className="auth-error">{error}</p>}
          </div>

          <div className="bantuan">
            <div className="punya-akun">
              <p>
                <span className="kode1">sudah punya akun?</span>
                <Link to="/login">masuk</Link>
              </p>
            </div>
          </div>

          <div className="masuk">
            <button type="submit">daftar</button>
          </div>

          <div className="atau">
            <p>Atau</p>
          </div>

          <div className="inter">
            <button type="button">
              <img src={logoGoogle} alt="logo google" />
              <p>daftar dengan google</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Daftar;
