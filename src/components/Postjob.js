import React,{useState} from 'react'
import { Outlet, Link, useNavigate  } from "react-router-dom";
const Postjob = () => {
  const navigate = useNavigate();
  const [admin,setUser]=useState({
    instname:"",
    postavailable:"",
    qualification:"",
    experience:"",
    department:"",
    date:""
    
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
  const {instname,postavailable,qualification,experience,department,date}=admin;
  const res = await fetch("postjob__" , {
    method:"POST",
    headers:{
      "Content-Type" :"application/json"

    },
      body:JSON.stringify({
        instname,postavailable,qualification,experience,department,date
      })
  });
  const data = await res.json();
  if(!instname||!postavailable||!qualification||!experience||!department||!date){
      window.alert("please fill all the details");
  }
 
    else{
      window.alert("JOB POSTED SUCCESSFULLY");
      console.log("JOB POSTED SUCCESSFULLY");
      navigate('/');
    }

}
  

  
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
    <img className="float-end rounded-circle" src="https://www.betterteam.com/images/betterteam-job-posting-template-completed-800x800-2020127.jpeg?crop=1:1,smart&width=250&dpr=2" width="300px" />
    <form method='POST'> 
      <center>
        <em>
          <u>
            <h1>POST A JOB</h1>
          </u>
        </em>
      </center>
      <p>
        INSTITUTE NAME:{" "}
        <input type="text" name="instname" id = "instname"    value={admin.instname}
           onChange={handleInputs} placeholder="eg:kmit" />
      </p>

      <p>
        POST AVAILABLE:{" "}
        <input type="text"
         name="postavailable"
         id = "postavailable"    value={admin.postavailable}
           onChange={handleInputs} placeholder="eg:pps lecturer" />
      </p>
      <p>
        QUALIFICATION REQUIRED:{" "}
        <input type="text" name="qualification"
        id = "qualification"    value={admin.qualification}
        onChange={handleInputs}
         placeholder="eg:Mtech" />
      </p>
      <p>
        EXPERIENCE REQUIRED:{" "}
        <input type="text" name = "experience" id = "experience"  
          value={admin.experience}
           onChange={handleInputs} placeholder="eg:5 yrs" />
      </p>
      <p>
        DEPARTMENT:{" "}
        <input type="text" name="department" id = "department"  
          value={admin.department}
           onChange={handleInputs}
           placeholder="eg:cse" />
      </p>
      <p>
        LAST DAY TO APPLY :{" "}
        <input type="date" name="date" id = "date"  
          value={admin.date}
           onChange={handleInputs} placeholder="eg:30" />
      </p>
      <center>
        <button type="button submit"  
        name = "signup" id="signup"
        className="btn btn-secondary form-submit"
        onClick={PostData} 
        >
        
            <h4>
              <em>POST</em>
            </h4>
        
        </button>
      </center>
      <br />
      <br />
    </form>
  </div>
</>
      <Outlet />

    </div>
  )
};

export default Postjob;

