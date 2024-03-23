import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Signupinst = () => {
  return (
    <div>
      <>
      <div className="container mt-3">
  <div className="card" style={{ width: 400 }}>
    <img src="picsu.jpg" className="float-end" style={{ width: "100%" }} />
    <div className="card-body">
      <h4 className="card-title">SIGN_UP</h4>
      <p className="card-text"></p>
      <form>
        <br />
        <p>
          Institute name:
          <br />
          <input type="name" placeholder="user_id" />
        </p>
        <p>
          Institute id:
          <br />
          <input type="id" placeholder="user_id" />
        </p>
        <label htmlFor="pwd"> create Password:</label>
        <br />
        <input type="password" id="pwd" name="pwd" placeholder="password" />
        <br />
        <p />
        <button type="button" className="btn btn-secondary">
          {" "}
          <Link className=" text-light " to="/navbarsupad">

            <h4>
              <em>Create_account</em>
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
}

export default Signupinst
