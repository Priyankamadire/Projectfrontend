import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Settinst = () => {
  return (
    <div>
      <br/>
      <button type="button" className="btn btn-primary  float-end bi bi-gear-wide">
    <Link className="text-light" to="/settings">
      Settings
    </Link>
  </button>
  <button
    type="button"
    className="btn btn-dark float-end bi bi-box-arrow-right"
  >
    <Link className="text-light" to="/supadm">
      LOGOUT
    </Link>
  </button>
        <br/>
        <h1><center><em>Settings</em></center></h1>
      <form>

  <label htmlFor="fname">Change Institute id</label>
  <br />
  <input type="text" id="fname" name="fname" />
  <br />
  <label htmlFor="pwd">Change Password:</label>
  <br />
  <input type="password" id="pwd" name="pwd" />
  <br />
  <br />
  <input type="submit" defaultValue="Submit"/>
</form>

    </div>
  )
}

export default Settinst
