import React,{useState} from 'react'
import { Outlet, Link ,useNavigate  } from "react-router-dom";
const Apply = () => {
  const navigate = useNavigate();
  

  const [admin,setUser]=useState({
    name:"",
    date:"",
    email:"",
    phone:"",
    postavailable:"",
    qualification:"",
    experience:"",
    department:"",
    github:""
  });
  let name,value;

// /jobapply_

const handleInputs=(e) =>{
console.log(e);
name = e.target.name;
value = e.target.value;
setUser({...admin,[name]:value});
}



const PostData = async (e) => {

  e.preventDefault();
  const {name,date,email,phone,postavailable,qualification,experience, department ,github}=admin;
  const res = await fetch("/applypost" , {
    method:"POST",
    headers:{
      "Content-Type" :"application/json"

    },
      body:JSON.stringify({
        name,date,email,phone,postavailable,qualification,experience, department,github
      })
  });
  const data = await res.json();
  if(!name||!date||!email||!phone||!postavailable||!qualification||!experience||!department ||!github){
      window.alert("please fill all th details");
  }

    else{
      window.alert("Applied successfully");
      console.log(" registeration successful");
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
    <Link className="text-light" to="/signin">
      LOGOUT
    </Link>
  </button>

  <div className="offcanvas offcanvas-start" id="demo">
    <div className="offcanvas-header">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body">
      <Link className="nav-link text-dark" to="/jobsavai">
        <strong>JOBS AVAILABLE</strong>
      </Link>
      <hr />
      <Link className="nav-link text-dark" to="/notif">
        <strong>NOTIFICATIONS</strong>
      </Link>
    </div>
  </div>
  <div className="container-fluid mt-3">
    <button
      className="btn btn-primary bi bi-funnel"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#demo"
    >
      FILTERS
    </button>
  </div>
  <br/>
      <form method='POST'>
      <center>
        <em>
          <u>
            <h1>APPLY FOR JOB</h1>
          </u>
        </em>
      </center>


      <img className='float-end' src='https://www.cvexamplesword.com/wp-content/uploads/2021/05/applying-for-job.jpg' width='400px'></img>
      <p>
        NAME:{" "}
        <input type="text" name="name" id = "name"    value={admin.name}
           onChange={handleInputs} placeholder="eg:swati" />
      </p>
      <p>
        ENTER YOUR DATE OF BIRTH:{" "}
        <input type="date" name="date" id = "date"    value={admin.date}
           onChange={handleInputs} placeholder="eg:10/10/10" />
      </p>
      <p>
        EMAIL:{" "}
        <input type="text" name="email" id = "email"    value={admin.email}
           onChange={handleInputs} placeholder="eg:abc@gmail.com" />
      </p>
      <p>
        PHONE:{" "}
        <input type="number" name="phone" id = "phone"    value={admin.phone}
           onChange={handleInputs} placeholder="eg:7845120369" />
      </p>

      <p>
         APPLYING POST :{" "}
        <input type="text"
         name="postavailable"
         id = "postavailable"    value={admin.postavailable}
           onChange={handleInputs} placeholder="eg:pps lecturer" />
      </p>


      <p>
         ENTER YOUR QUALIFICATION :{" "}
        <input type="text" name="qualification"
        id = "qualification"    value={admin.qualification}
        onChange={handleInputs}
         placeholder="eg:Mtech" />
      </p>
      <p>
        ENTER YOUR WORK EXPERIENCE :{" "}
        <input type="text" name = "experience" id = "experience"  
          value={admin.experience}
           onChange={handleInputs} placeholder="eg:5 yrs" />
      </p>
      <p>
       WHICH DEPARTMENT YOU ARE RELATED :{" "}
        <input type="text" name="department" id = "department"  
          value={admin.department}
           onChange={handleInputs}
           placeholder="eg:cse" />
      </p>
      <p>
       GITHUB_LINK:{" "}
        <input type="url" name="github" id = "github"   placeholder="eg:http://github.com//raj" value={admin.github}
           onChange={handleInputs} />
      </p>
      <center>
        <button type="button submit"  
        name = "signup" id="signup"
        className="btn btn-secondary form-submit"
        onClick={PostData} 
        >
        
            <h4>
              <em>APPLY</em>
            </h4>
        
        </button>
      </center>
      <br />
      <br />
    </form>
      
      
      
      
      </>
    </div>
  )
}

export default Apply
