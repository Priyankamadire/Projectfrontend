import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <>
  <br />
  <center>
    <div
      className="box"
      style={{ backgroundColor: "rgba(253, 185, 102, 0.644)" }}
    >
      <form>
        <h1>SIGN_UP</h1>
        <br />
        <p>
          ENTER FIRST NAME:
          <input type="name" />
        </p>
        <p>
          ENTER LAST NAME:
          <input type="name" />
        </p>
        <p>
          ENTER YOUR MOBILE NUMBER:
          <input type="number" name='number'  id ="number"/>
        </p>
        <p>
          CREATE YOUR PASSWORD:
          <input type="password" />{" "}
        </p>
        <p>
          Email:
          <input type="email"  />
        </p>
        <div className="container">
          <button type="button" className="btn btn-secondary">
            {" "}
            <center>
              <Link className=" text-light " to="/signav">
                <h4>
                  <em>CREATE</em>
                </h4>
              </Link>
            </center>
          </button>
        </div>
      </form>
    </div>
  </center>
</>
<Outlet />

    </div>
  )
};

export default Signin;
