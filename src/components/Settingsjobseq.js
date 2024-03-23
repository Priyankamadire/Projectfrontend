import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Settingsjobseq = () => {
  return (
    <div>
      <button type="button" className="btn btn-primary  float-end bi bi-gear-wide">
    <Link className="text-light" to="/sett">
      Settings
    </Link>
  </button>
  <button
    type="button"
    className="btn btn-dark float-end bi bi-box-arrow-right"
  >
    <Link className="text-light" to="/login">
      LOGOUT
    </Link>
  </button>
  <h1><center><em>Settings</em></center></h1>

      <form>
  <label htmlFor="fname">Change Name</label>
  <br />
  <input type="text" id="fname" name="fname" />
  <br />
  <label htmlFor="fname">Change Mobile number</label>
  <br />
  <input type="number" id="fnumber" name="fnumber" />
  <br />
  <label htmlFor="fname">Change Date of birth</label>
  <br />
  <input type="data" id="fnumber" name="fnumber" />
  <br />
  <label htmlFor="pwd">Change Password:</label>
  <br />
  <input type="password" id="pwd" name="pwd" />
  <br />
  <br />
  <input type="submit" defaultValue="Submit" />
</form>

    </div>
  )
}

export default Settingsjobseq
