import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Csd = () => {
  return (
    <div>
        <>
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
              POST A JOB
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
        </li>
<hr/>



              
            
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
  <form className="d-flex">
  <input
    className="form-control me-2"
    type="text"
    placeholder="ENTER FACULTY NAME "
  />
  <button className="btn btn-warning bi bi-search " type="button">
    Search
  </button>
</form>


<center><h1><em>Details of Faculty who are working under CSD department</em></h1></center>


  <table style={{ width: "100%" }} className="text-light">
    <tbody>
      <tr>
        <th>S.NO</th>
        <th>NAME</th>
        <th>WORKING_POST</th>
        <th>INSTITUTE_ID</th>
        <th>DEPARTMENT</th>
        <th>Experience</th>
        <th>MOBILE NUMBER</th>
        <th>MAIL_ID</th>
        <th>RESUME</th>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"       "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
    </tbody>
  </table>
  <pre> </pre>
</>
<Outlet />
    </div>
  )
}

export default Csd
