import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    password: "",
    cpassword: ""
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, qualification, experience, password, cpassword } = user;
    const res = await fetch("https://projectbackends.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, qualification, experience, password, cpassword
      })
    });

    const data = await res.json();
    if (res.status === 488) {
      window.alert('User already exists. Try creating with a new email ID.');
    } else if (!name || !email || !phone || !qualification || !experience || !password || !cpassword) {
      window.alert("Please fill in all the details");
    } else if (res.status === 422) {
      window.alert("Enter correct password");
    } else {
      window.alert("Registration successful");
      navigate('/signin');
    }
  }
// postjob__
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">SIGN UP / CREATE NEW ACCOUNT</h2>
              <form className="register-form" id="register-form" onSubmit={PostData}>
  <div className="form-group">
    <label htmlFor="name">
      <h5>Enter your name:
        <i className='bi bi-person-fill'></i>
      </h5>
      <p></p>
    </label>
    <input type="text" name="name" id="name" className="form-control" autoComplete="off"
      value={user.name} onChange={handleInputs} placeholder="Your Name" />
  </div>
  <div className="form-group">
    <label htmlFor="email">
      <h5>Enter your Email:
        <i className='bi bi-envelope-fill'></i>
      </h5>
      <p></p>
    </label>
    <input type="text" name="email" id="email" className="form-control" autoComplete="off"
      value={user.email} onChange={handleInputs} placeholder="Your Email" />
  </div>
  <div className="form-group">
    <label htmlFor="phone">
      <h5>Enter your mobile number:
        <i className='fa fa-phone-square'></i>
      </h5>
      <p></p>
    </label>
    <input type="text" name="phone" id="phone" className="form-control" autoComplete="off"
      value={user.phone} onChange={handleInputs} placeholder="Your Phone Number" />
  </div>
  <div className="form-group">
    <label htmlFor="qualification">
      <h5>Enter your qualification:
        <i className='bi bi-mortarboard-fill'></i>
      </h5>
      <p></p>
    </label>
    <input type="text" name="qualification" id="qualification" className="form-control" autoComplete="off"
      value={user.qualification} onChange={handleInputs} placeholder="Your Qualification" />
  </div>
  <div className="form-group">
    <label htmlFor="experience">
      <h5>Enter your Experience:
        <i className='fa fa-briefcase'></i>
      </h5>
      <p></p>
    </label>
    <input type="text" name="experience" id="experience" className="form-control" autoComplete="off"
      value={user.experience} onChange={handleInputs} placeholder="Your Experience" />
  </div>
  <div className="form-group">
    <label htmlFor="password">
      <h5>Create password:
        <i className='fa fa-key'></i>
      </h5>
      <p></p>
    </label>
    <input type="password" name="password" id="password" className="form-control" autoComplete="off"
      value={user.password} onChange={handleInputs} placeholder="Create Password" />
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">
      <h5>Confirm password:
        <i className='fa fa-key'></i>
      </h5>
      <p></p>
    </label>
    <input type="password" name="cpassword" id="cpassword" className="form-control" autoComplete="off"
      value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" />
  </div>
  <br/>
  <center>
  <button type="submit" className="btn btn-success btn-block">REGISTER</button></center>
  <p className="text-center mt-3">Already have an account? <Link to='/signin'>LOGIN</Link></p>
</form>

            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img src =  'https://images.creativemarket.com/0.1.0/ps/5619475/1820/1213/m1/fpnw/wm1/obn1eyv07hrklwajtbxon51mrwh19tdsdk4yfgrvf3rezgjhvqtbz63i1iynvcxa-.jpg?1545910921&s=65129f1789eee7e2d18d316380208700' alt="Registration" className="img-fluid"  />
      </div>
          {/* <div className="col-md-6">
            <img src='https://images.creativemarket.com/0.1.0/ps/5619475/1820/1213/m1/fpnw/wm1/obn1eyv07hrklwajtbxon51mrwh19tdsdk4yfgrvf3rezgjhvqtbz63i1iynvcxa-.jpg?1545910921&s=65129f1789eee7e2d18d316380208700' alt="Registration" className="img-fluid" />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Register;
