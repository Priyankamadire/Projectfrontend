import React from 'react'
import { Outlet, Link } from "react-router-dom";


const supadm = () => {
  return (
    <div>
      <>
      <div className="container mt-3">
  <div className="card" style={{ width: 400 }}>
    <img src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" className="card-img-top" style={{ width: "100%" }} />
    <div className="card-body">
      <h4 className="card-title">LOGIN</h4>
      <p className="card-text"></p>
      <form>
        <br />
        <p>
          USER_ID
          <br />
          <input type="name" placeholder="user_id" />
        </p>
        <br />
        <label htmlFor="pwd">Password:</label>
        <br />
        <input type="password" id="pwd" name="pwd" placeholder="password" />
        <br />
        <p />
        <button type="button" className="btn btn-secondary">
          {" "}
          <Link className=" text-light " to="/navbarsupad">
            <h4>
              <em>SUBMIT</em>
            </h4>
          </Link>
        </button>
        <button type="button" className="btn btn-secondary">
          {" "}
          <Link className=" text-light " to="/signupclg">
            <h4>
              <em>SIGN_UP</em>
            </h4>
          </Link>
        </button>
      </form>
    </div>
  </div>
</div>
</>
      <Outlet />

    </div>
  )
};

export default supadm;
