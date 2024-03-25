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
  const res = await fetch("https://projectbackends.onrender.com/postjob__" , {
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
      navigate('/navbarsupad');
    }

}
  

  
  return (
    <div>
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
        
      
        </div>
        <p></p>
 
        <div className="box" style={{ backgroundColor: "#f0f8ff", borderRadius: "10px", maxWidth: "500px", margin: "auto", padding: "10px 20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
  <form method='POST'> 
    <center>
      <h1 style={{ color: "#007bff" }}>POST A JOB</h1>
    </center>
      <label htmlFor="instname">Institute Name:</label>
      <input type="text" name="instname" id="instname" value={admin.instname} onChange={handleInputs} placeholder="eg: KMIT" style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ced4da" }} />
    
      <label htmlFor="postavailable">Post Available:</label>
      <input type="text" name="postavailable" id="postavailable" value={admin.postavailable} onChange={handleInputs} placeholder="eg: PPS Lecturer" style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ced4da" }} />
   
      <label htmlFor="qualification">Qualification Required:</label>
      <input type="text" name="qualification" id="qualification" value={admin.qualification} onChange={handleInputs} placeholder="eg: MTech" style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ced4da" }} />
   
      <label htmlFor="experience">Experience Required:</label>
      <input type="text" name="experience" id="experience" value={admin.experience} onChange={handleInputs} placeholder="eg: 5 yrs" style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ced4da" }} />
    
      <label htmlFor="department">Department:</label>
      <input type="text" name="department" id="department" value={admin.department} onChange={handleInputs} placeholder="eg: CSE" style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ced4da" }} />
    
      <label htmlFor="date">Last Day to Apply:</label>
      <input type="date" name="date" id="date" value={admin.date} onChange={handleInputs} style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ced4da" }} />
    <center>
      <button type="button submit" name="signup" id="signup" className="btn btn-primary" onClick={PostData} style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", fontWeight: "bold", cursor: "pointer" }}>POST</button>
    </center>
  </form>
</div>

</>
      <Outlet />

    </div>
  )
};

export default Postjob;
