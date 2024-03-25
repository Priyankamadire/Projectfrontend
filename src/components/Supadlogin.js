import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Supadlogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [instcode, setInstcode] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        // Your login logic here
        const res = await fetch('https://projectbackends.onrender.com/suplogin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                instcode,
                password
            })
        });

        const data = await res.json();

        window.localStorage.setItem("token", data.data);
        window.localStorage.setItem("isLoggedIn_", true);

        if (res.status === 411) {
            window.alert("FILL COMPLETE FORM TO REGISTER");
        } else if (res.status === 401) {
            window.alert('Wrong password try again');
        } else if (res.status === 406) {
            window.alert('Invalid details try again');
        } else {
            window.alert("Login successful");
            navigate('/navbarsupad');
        }
    };  

    return (
        <div className='suplogin-scrool' >
            <div>
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card" style={{ maxWidth: 400 }}>
                <img className="card-img-top" src="http://collegesimply.imgix.net/primary/massachusetts-institute-of-technology-166683.jpg?auto=format,compress" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">ADMIN LOGIN</h4>
                    <form method='POST' className='login-forms' id='login-form'>
                        <div className='form-group'>
                            <label htmlFor="email">
                                <h5><i className="fa fa-envelope-o" aria-hidden="true"></i></h5>
                            </label>
                            <input type="text" name="email" id="email" autoComplete='off'
                                value={email}
                                onClick={() => setEmail('kmit27@gmail.com')}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder='Institute email' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="instcode">
                                <h5><i className="fa fa-briefcase" aria-hidden="true" /></h5>
                            </label>
                            <input type="text" name="instcode" id="instcode" autoComplete='off'
                                value={instcode}
                                onClick={() => setInstcode('KMIT-2007')}
                                onChange={(e) => setInstcode(e.target.value)}
                                className="form-control"
                                placeholder='Institute unique code' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="password">
                                <h5><i className="fa fa-key" aria-hidden="true"></i></h5>
                            </label>
                            <input type="password" name="password" id="password" autoComplete='off'
                                value={password}
                                onClick={() => setPassword('12345')}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder='Enter password' />
                        </div>
<br/>
                        <center>
                            <button type="button" className='form-submit btn btn-success' onClick={loginUser}>
                                <h6><em>Login</em></h6>
                            </button>
                        </center>

                        {/* <div className="mt-3">
                            <h5>Don't have an account? Click here</h5>
                            <button type="button" className='btn btn-secondary'>
                                <Link className='text-white' to='/supad_regis'>SIGN UP</Link>
                            </button>
                        </div> */}
                    </form>
                </div>
            </div></div>
        </div></div>
    );
}

export default Supadlogin;
