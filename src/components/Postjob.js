import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Postjob = () => {
    const navigate = useNavigate();
    const [admin, setUser] = useState({
        instname: "",
        postavailable: "",
        qualification: "",
        experience: "",
        department: "",
        date: ""
    });

    const handleInputs = (e) => {
        setUser({ ...admin, [e.target.name]: e.target.value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { instname, postavailable, qualification, experience, department, date } = admin;
        if (!instname || !postavailable || !qualification || !experience || !department || !date) {
            window.alert("Please fill all the details");
        } else {
            const res = await fetch("https://projectbackends.onrender.com/postjob__", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    instname,
                    postavailable,
                    qualification,
                    experience,
                    department,
                    date
                })
            });
            const data = await res.json();
            window.alert("Job posted successfully");
            navigate('/navbarsupad');
        }
    }

    return (
        <div>
            
            <div>
        <button
          type="button"
          className="btn btn-dark float-end bi bi-box-arrow-right"
        >
          <Link className="text-light" to="/sup_log">LOGOUT</Link>
        </button>
        <div className="offcanvas offcanvas-start" id="demo">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li>
                            <Link className="text-dark" to="/postjob">POST A JOB</Link>
                            <hr />
                        </li>
                        <li>
                            <Link className="text-dark" to="/applications">View applications</Link>
                            <hr />
                        </li>
                      <li>
                      <Link className="text-dark" to="/facwork">Working Faculty</Link>
                            <hr />
                      </li>
                      <li>
                      <Link className="text-dark" to="/retai">Retired Faculty</Link>
                            <hr />
                      </li>
                      <li>
                      <Link className="text-dark" to="/newfac">New Faculty</Link>
                            <hr />
                      </li>

                      
                    </ul>
                </div>
            </div>
            <div className="container-fluid mt-3">
                <button className="btn btn-success bi bi-funnel" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                    <strong>FILTERS</strong>
                </button>
            </div>
        </div>
            <div className="container mt-5">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Post a Job</h2>
                                <form onSubmit={PostData}>
                                    <div className="mb-3">
                                        <label htmlFor="instname" className="form-label">Institute Name</label>
                                        <input type="text" className="form-control" id="instname" name="instname" value={admin.instname} onChange={handleInputs} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="postavailable" className="form-label">Post Available</label>
                                        <input type="text" className="form-control" id="postavailable" name="postavailable" value={admin.postavailable} onChange={handleInputs} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="qualification" className="form-label">Qualification Required</label>
                                        <input type="text" className="form-control" id="qualification" name="qualification" value={admin.qualification} onChange={handleInputs} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="experience" className="form-label">Experience Required</label>
                                        <input type="text" className="form-control" id="experience" name="experience" value={admin.experience} onChange={handleInputs} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="department" className="form-label">Department</label>
                                        <input type="text" className="form-control" id="department" name="department" value={admin.department} onChange={handleInputs} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Last Day to Apply</label>
                                        <input type="date" className="form-control" id="date" name="date" value={admin.date} onChange={handleInputs} />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Post</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <img src="https://www.glassdoor.com/employers/app/uploads/sites/2/2018/08/post-a-job-544449170.jpg" className="img-fluid rounded-start mx-auto d-block" alt="Card" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Postjob;
