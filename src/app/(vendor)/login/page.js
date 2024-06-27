import Image from "next/image";
import './login.css';

function Login() {
  return (
    <main>
      <div className="container-left">
        <Image src='/images/login.png' alt="Login" width={732} height={900} className="login-image" />
      </div>
      <div className="container-right">
        <div className="login-form">
          <div className="login-header">
            <Image src="/images/logo.png" alt="logo" width={224} height={47} />
            <div className="login-title">
              <h1 className="ibm-plex-mono-bold">Đăng nhập</h1>
              <p className="ibm-plex-mono-regular">Chào mừng quay trở lại, vui lòng đăng nhập.</p>
            </div>
          </div>
          <div className="form">
              <div className="login-input">
                <label htmlFor="email" className="ibm-plex-mono-regular">Email</label>
                <input type="email" name="email" required placeholder="Nhập Email"/>
              </div>
              <div className="login-input">
                <label htmlFor="password" className="ibm-plex-mono-regular">Password</label>
                <input type="password" name="password" required />
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
