import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Header= () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <button
      type="button"
      className="navbar-toggler btn btn-light"
      data-bs-toggle="collapse"
      data-bs-target="#menubar"
    >
      <span className="navbar-toggler-icon btn btn-light" />
    </button>
    <div className="collapse navbar-collapse text-light" id="menubar">
        <ul className="navbar-nav col">
          <li className="nav-item col">
            <Link 
             className= "nav-link bi bi-house-fill text-light" to="/">Home</Link>
          </li>
          <li className="nav-item col">
            <Link
            className="nav-link bi bi-ticket-fill text-light"
              to="/About">ABOUT</Link>
          </li>
        <li className="nav-item col" >
      <Link className="nav-link bi bi-newspaper text-light" to ="/vacancies">VACANCIES</Link> 
          </li>  
       
          <li className="nav-item col">
            
            <Link   className="nav-link bi bi-patch-question-fill text-light"  to ="/faq" >
            FAQS
            </Link>
          </li>
        <li className="nav-item col">
              
           <Link className="nav-link bi bi-person-lines-fill text-light" to ="/contact">CONTACT</Link>
          </li> 
          <li className="nav-item col">
             
           <Link 
            className="nav-link bi bi-sign-turn-right-fill text-light" to ="/signin">
              LOGIN/SIGN_UP
  
            </Link>
          </li>
          {/* <li className="nav-item col">
            <Link
            className="nav-link bi bi-people-fill text-light" 
            to ="/register_">Register</Link>
          </li> */}
          <li className="nav-item col">
            <Link
            className="nav-link  text-light bi bi-file-earmark-post-fill"
            to="/sup_log">
              POST_JOB
            </Link>
          </li>
          {/* <li className="nav-item col">
            
            <Link   className="nav-link bi bi-patch-question-fill text-light"  to ="/faq" >
            FAQS
            </Link>
            </li> */}
        </ul>
        </div>
</div>
        
      </nav>



      
      <Outlet />

    </>
  )
};

export default Header;




