import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Apply = () => {
  const navigate = useNavigate();
  const [admin, setUser] = useState({
    name: "",
    date: "",
    email: "",
    phone: "",
    postavailable: "",
    qualification: "",
    experience: "",
    department: "",
    github: ""
  });
  
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...admin, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, date, email, phone, postavailable, qualification, experience, department, github } = admin;
    if (!name || !date || !email || !phone || !postavailable || !qualification || !experience || !department || !github) {
      window.alert("Please fill all the details.");
      return;
    }

    const res = await fetch("https://projectbackends.onrender.com/applypost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, date, email, phone, postavailable, qualification, experience, department, github
      })
    });
    
    if (res.status === 200) {
      window.alert("Applied successfully");
      navigate('/jobsavai');
    } else {
      window.alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className='apply-scrool'>
      <div>
      <button
    type="button"
    className="btn btn-dark float-end bi bi-box-arrow-right"
  >
    <Link className="text-light" to="/signin">
      LOGOUT
    </Link>
  </button>
  <div className="offcanvas offcanvas-start" id="demo">
    <div className="offcanvas-header">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body">
      <Link className="nav-link text-dark" to="/jobsavai">
        <strong>JOBS AVAILABLE</strong>
      </Link>
      <hr />
      <Link className="nav-link text-dark" to="/notif">
        <strong>NOTIFICATIONS</strong>
      </Link>
    </div>
  </div>
  <div className="container-fluid mt-3">
    <button
      className="btn btn-primary bi bi-funnel"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#demo"
    >
      FILTERS
    </button>
    </div>
    <div className="container mt-5" >
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
            <form onSubmit={PostData}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name:</label>
    <input type="text" className="form-control" id="name" name="name" value={admin.name} onChange={handleInputs} />
  </div>
  <div className="mb-3">
    <label htmlFor="date" className="form-label">Date of Birth:</label>
    <input type="date" className="form-control" id="date" name="date" value={admin.date} onChange={handleInputs} />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email:</label>
    <input type="text" className="form-control" id="email" name="email" value={admin.email} onChange={handleInputs} />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone:</label>
    <input type="number" className="form-control" id="phone" name="phone" value={admin.phone} onChange={handleInputs} />
  </div>
  <div className="mb-3">
    <label htmlFor="postavailable" className="form-label">Applying Post:</label>
    <input type="text" className="form-control" id="postavailable" name="postavailable" value={admin.postavailable} onChange={handleInputs} />
  </div>
  <div className="mb-3">
    <label htmlFor="qualification" className="form-label">Qualification:</label>
    <input type="text" className="form-control" id="qualification" name="qualification" value={admin.qualification} onChange={handleInputs} />
  </div>
  <div className="mb-3">
    <label htmlFor="experience" className="form-label">Experience:</label>
    <input type="text" className="form-control" id="experience" name="experience" value={admin.experience} onChange={handleInputs} />
  </div>
  <div className="mb-3">
    <label htmlFor="department" className="form-label">Department:</label>
    <input type="text" className="form-control" id="department" name="department" value={admin.department} onChange={handleInputs} />
  </div>
  <div className="mb-3">
    <label htmlFor="github" className="form-label">RESUME LINK:</label>
    <input type="url" className="form-control" id="github" name="github" value={admin.github} onChange={handleInputs} />
  </div>
  <div className="text-center">
    <button type="submit" className="btn btn-primary">Apply</button>
  </div>
</form>

            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://www.cvexamplesword.com/wp-content/uploads/2021/05/applying-for-job.jpg" className="img-fluid" alt="Apply for Job" />
            </div>
          </div>
        </div>
      </div></div>
    </div></div>
  );
}

export default Apply;
