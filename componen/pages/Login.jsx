import { Link } from 'react-router-dom'
import '../../style/login.css'
import logo from '../../src/assets/movie-open.png'
import logoGoogle from '../../src/assets/logo-google.png'
import eyeOff from '../../src/assets/eye-off.png'

function Login() {
  return (
    <div className="beground">
      <div className="card">
        <form>
          <div className="title">
            <img src={logo} alt="chill app logo" />
          </div>

          <div className="title">
            <h2>masuk</h2>
            <p>selamat datang kembali</p>
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
                required
              />
            </div>

            <div className="sandi1">
              <label htmlFor="password">kata sandi</label>

              <div className="input-rapper1">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="masukkan kata sandi"
                  required
                />
                <img src={eyeOff} alt="eye icon" />
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
  )
}

export default Login