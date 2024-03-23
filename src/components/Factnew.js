import React,{useEffect ,  useState} from 'react';
import { Outlet, Link ,useNavigate  } from "react-router-dom";
import axios from 'axios';
const Factnew = () => {

  const navigate = useNavigate();
  const [products , setProducts] = useState("");

 
  useEffect(()=>{
  const fetchdata=async()=>{
    const data = await axios.get('/newfa_');
    console.log(data);
    setProducts(data);
  };
  fetchdata();
  },[]);
  const [admin,setUser]=useState({
    name: "",
    workingpost: "",
    newinstituteid:"",
    qualification:"",
    department:"",
    year:"",
    phone:"",
    email: ""


    
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
  const {name  ,workingpost,newinstituteid,qualification,department,year,phone,email}=admin;
  const res = await fetch("/nfaculty" , {
    method:"POST",
    headers:{
      "Content-Type" :"application/json"

    },
      body:JSON.stringify({
          name ,workingpost,newinstituteid,qualification,department,year,phone,email
      })
  });
  const data = await res.json();
  if(!name||!workingpost||!newinstituteid||!qualification||!department||!year||!phone||!email){
      window.alert("please fill all th details");
  }
 else if(res.status === 423 || !data){
      window.alert("Institute id can be repated try again");
      // console.log("invalid registeration");
    }
    else{
      window.alert("details uploaded successfully");
      console.log(" registeration successful");
      // navigate('/');
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
        <hr />


              
            
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
  <form className="d-flex" >
  <input
    className="form-control me-2"
    type="text"
    placeholder="ENTER FACULTY NAME "
  />
  <button className="btn btn-warning bi bi-search " type="button">
    Search
  </button>
</form>
<center><h1><em>Details of Faculty joined newly in institute</em></h1></center> 

<div >




<br/>
<br/>
<div className="table-responsive">  
 <table style={{ width: "100%" }} className="text-dark" method='POST'>
    <tbody >
      <tr>
        {/* <th>S.NO</th> */}
        <th>NAME</th>
        <th>WORKING_POST</th>
        <th>NEW INSTITUTE_ID</th>
        <th>QUALIFICATION</th>
        <th>DEPARTMENT</th>
        <th>JOINED YEAR</th>
        <th>MOBILE NUMBER</th>
        <th>MAIL_ID</th>
       
      </tr>
      {
        products && products?.data.map((product)=>(

         
      <tr>
        
     <td>{product.name}</td>
      <td>{product.workingpost}</td>
      <td>{product.newinstituteid}</td>
      <td>{product.qualification}</td>
      <td>{product.department}</td>
       <td>{product.year}</td> 
       <td>{product.phone}</td>
       <td>{product.email}</td>
        
    </tr>
     

        ))
      }
   
      <tr>
     
     <td>
       <input type="string"   name = "name" id = "name"    value={admin.name}
           onChange={handleInputs}  />
     </td>
     <td>
       <input type="string" name = "workingpost" id = "workingpost"  value={admin.workingpost}     
               onChange={handleInputs} />
     </td>
     <td>
       <input type="string"   name = "newinstituteid" id = "newinstituteid" value={admin.newinstituteid}     
               onChange={handleInputs} />
     </td>
     <td>
       <input type="string" name = "qualification" id = "qualification" value={admin.qualification}     
               onChange={handleInputs} />
     </td>
     <td>
       <input type="string" name = "department" id = "department" value={admin.department}     
               onChange={handleInputs} />
     </td>
     <td>
       <input type="string"    name = "year" id = "year" value={admin.year}     
               onChange={handleInputs}/>
     </td>
     <td>
       <input type="number"  name = "phone" id = "phone" value={admin.phone}     
               onChange={handleInputs} />
     </td>
     <td>
       <input type="email" name = "email" id = "email" value={admin.email}     
               onChange={handleInputs} />
     </td>
   
   </tr>
   
    </tbody>
   
  </table></div> 
  <br/>
  <button type="button submit" name = "signup" id="signup" className=' btn btn-secondary table-submit' onClick={PostData} >POST


</button>
{/*  */}
  </div>

</>

    </div>
  )
}

export default Factnew

