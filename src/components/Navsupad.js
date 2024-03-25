import React from 'react'

import { Outlet, Link } from "react-router-dom";
const Navsupad = () => {
  return (
    <div className='navs-scrool'>
      <>

     
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
        
        <br/>
        </div>
 
 
  

  <br />
  {/* <form className="d-flex">
  <input
    className="form-control me-2"
    type="text"
    placeholder="ENTER FACULTY NAME "
  />
  <button className="btn btn-warning bi bi-search " type="button">
    Search
  </button>
</form> */}

</>
<h1><center><em><ul>WELCOME</ul></em></center></h1>
<h4><center>
CLICK ON FILTERS TO VIEW OPTIONS
  </center></h4>

  <br/>
  <div>
  <em>
    <strong>
  <p>
  The responsibilities of administrators include reviewing job applications, </p>
  <p>accepting or rejecting them, and managing collections of faculty details, </p>
  <p>including those of retired, joined, and working faculty. Administrators are </p>
  <p>also tasked with posting faculty job openings.</p>
  </strong>
  </em>
  </div>
  {/* <img src='https://tse1.mm.bing.net/th?id=OIP.C8kLTewLWw47XMa3IQSJewHaDp&pid=Api&P=0'></img> */}
  <br/>
  <img  className='float-end' src = 'https://tse4.mm.bing.net/th?id=OIP._nCpMz4NuUwoiUGQXOGb6wHaFF&pid=Api&P=0'></img>
      <Outlet />

    </div>
  )
};

export default Navsupad;
