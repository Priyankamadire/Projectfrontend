import React from 'react'

import { Outlet, Link } from "react-router-dom";
const Navsupad = () => {
  return (
    <div>
      <>
     
  <button
    type="button"
    className="btn btn-dark float-end bi bi-box-arrow-right"
  >
    <Link className="text-light" to="/sup_log">
      LOGOUT
    </Link>
  </button>
  <div className="offcanvas offcanvas-start" id="demo">
    <div className="offcanvas-header">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body">
      <strong>
        <pre />
        <p> </p>
        <pre />
        <p />
      </strong>
      <ul>
        <strong>
          
        <li>
            <Link className=" text-dark" to="/postjob">
             POST JOB
            </Link><hr />

          </li>
          <li>
            <Link className=" text-dark" to="/applications">
              View applications
            </Link><hr />

      </li>
        </strong>
        <li>
          <strong></strong>
          <div className="container">
            <strong></strong>
            <div className="dropdown">
              <strong></strong>
               <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <strong>
                  <Link className="text-dark " to="/facdet">
                    VIEW FACULTY DETAILS
                  </Link>{" "}
                </strong>
              </button> 
               <ul className="dropdown-menu">
                <li>
                  {" "}
                  <Link className="dropdown-item text-dark" to="/facwork">
                    WORKING FACULTY
                  </Link>
                </li>
                <hr />
                <li>
                  {" "}
                  <Link className="dropdown-item text-dark" to="/retai">
                    RETIRED FACULTY
                  </Link>
                </li>
                <hr />
                <li>
                  {" "}
                  <Link className=" dropdown-item text-dark" to="/newfac">
                    NEWLY JOINED FACULTY
                  </Link>
                </li>

              </ul> 

              </div>
          </div>
        </li>
        <hr />

        {/* <li>
          <strong></strong>
          <div className="container">
            <strong></strong>
            <div className="dropdown">
              <strong></strong>
               <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <strong>
                <Link className="text-dark " to="/depart">
                    DEPARTMENT
                  </Link>
                </strong>
              </button> 
               <ul className="dropdown-menu">
                <li>
                  {" "}
                  <Link className="dropdown-item text-dark" to="/cse">
                      CSE
                    </Link>
                </li>
                <hr />
                <li>
                  {" "}
                  <Link className="dropdown-item text-dark" to="/csm">
                      CSM
                    </Link>
                </li>
                <hr />
                <li>
                  {" "}
                  <Link className="dropdown-item text-dark" to="/csd">
                      CSD
                    </Link>
                </li>
                <hr />

                <li>
                  {" "}
                  <Link className="dropdown-item text-dark" to="/it">
                      IT
                    </Link>
                </li>

              </ul> 

              </div>
          </div>
        </li> */}




              
            
      </ul>
    </div>
  </div>
  <div className="container-fluid mt-3">
    <button
      className=" btn btn-success bi bi-funnel"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#demo"
    >
      
      <strong> 


      FILTERS
      </strong>
    </button>
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
  <img src='https://tse1.mm.bing.net/th?id=OIP.C8kLTewLWw47XMa3IQSJewHaDp&pid=Api&P=0'></img>
  <br/>
  <img  className='float-end' src = 'https://tse4.mm.bing.net/th?id=OIP._nCpMz4NuUwoiUGQXOGb6wHaFF&pid=Api&P=0'></img>
      <Outlet />

    </div>
  )
};

export default Navsupad;
