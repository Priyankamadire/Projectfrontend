import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signinlogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('https://projectbackends.onrender.com/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    const data = await res.json();

    window.localStorage.setItem("token", data.data);
    window.localStorage.setItem("isLoggedIn", true);

    if (res.status === 400) {
      window.alert("Fill complete form to login");
    } else if (res.status === 412) {
      window.alert("Password not matched. Enter correct password");
    } else if (res.status === 405) {
      window.alert("Invalid details. Try again");
    } else {
      window.alert("Login successful");
      navigate('/lognav');
    }
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: 400 }}>
        <img className="card-img-top" src="https://static.vecteezy.com/system/resources/previews/000/518/208/original/man-working-with-computer-bright-colorful-vector-illustration.jpg" alt="Card" />
        <div className="card-body">
          <h4 className="card-title text-center">LOGIN</h4>
          <form method='POST' className='login-form' id='login-form'>
            <div className='form-group'>
              <label htmlFor="email">
                <h5>Email:</h5>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete='off'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Your email"
              />
            </div>
            <div className='form-group'>
              <label htmlFor="password">
                <h5>Password</h5>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete='off'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                name="rememberme"
                checked={remember}
                onChange={(e) => setRemember(!remember)}
                className="form-check-input"
                id="rememberme"
              />
              <label className="form-check-label" htmlFor="rememberme">Remember me</label>
            </div>
            <div className='form-group form-button text-center'>
              <button
                type="submit"
                name="signup"
                id="signup"
                className="btn btn-success"
                onClick={loginUser}
              >
                <h6><em>Login</em></h6>
              </button>
            </div>
          </form>
          <div className="text-center">
            <h5>Don't have an account? <Link to="/register_" className="text-primary">Sign Up</Link></h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signinlogin;
