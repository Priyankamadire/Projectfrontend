import React,{useEffect ,  useState} from 'react';
import { Outlet, Link , useNavigate } from "react-router-dom";
import axios from 'axios';

const Hire = () => {

    const navigate = useNavigate();
  const [admin,setUser]=useState({
    instname:"",
    workingpost:""
    
  });
  let name,value;


const handleInputs=(e) =>{
console.log(e);
name = e.target.name;
value = e.target.value;
setUser({...admin,[name]:value});
}



const PostData = async (e) => {
  e.preventDefault();
  const {instname,workingpost}=admin;
  const res = await fetch("https://projectbackends.onrender.com/hireop" , {
    method:"POST",
    headers:{
      "Content-Type" :"application/json"

    },
      body:JSON.stringify({
        instname,workingpost
      })
  });
  const data = await res.json();
  if(!instname||!workingpost){
      window.alert("please fill all the details");
  }
 
    else{
      window.alert("HIRED  SUCCESSFULLY");
      console.log("JOB POSTED SUCCESSFULLY");
      navigate('/');
    }

}
  
  return (
    <>
    <div>
        
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
  <div className="box" style={{ backgroundColor: "rgb(178, 255, 184)" }}>
  <form method='POST'>
  <center>
        <em>
          <u>
            <h1>HIRE</h1>
          </u>
        </em>
      </center>
      <p>
        INSTITUTE NAME:{" "}
        <input type="text" name="instname" id = "instname"    value={admin.instname}
           onChange={handleInputs} placeholder="eg:kmit" />
      </p>
      <p>
        POST :{" "}
        <input type="text"
         name="workingpost"
         id = "workingpost"    value={admin.workingpost}
           onChange={handleInputs} placeholder="eg:pps lecturer" />
      </p>
      <center>
        <button type="button submit"  
        name = "signup" id="signup"
        className="btn btn-secondary form-submit"
        onClick={PostData} 
        >
        
            <h4>
              <em>HIRE</em>
            </h4>
        
        </button>
      </center>

  </form>
  </div>

        
        
        </div></>
  )
}
    
export default Hire;
