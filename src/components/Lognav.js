import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Lognav = () => {
  return (
    <div>
      <>
      
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
      className="btn btn-success bi bi-funnel"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#demo"
    >
      FILTERS
    </button>
  </div>
  <img
    src="https://thumbs.dreamstime.com/b/job-opportunity-24549521.jpg"
    width="550px"
    height="400px"
    className="float-end rounded-circle"
  />
  <strong>
    <p>after login you can find your jobs</p>
    <p>also you will receive notifications when ever job is available</p>
  </strong>
</>
<Outlet />


    </div>
  )
};

export default Lognav;
