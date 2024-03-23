import React,{useEffect ,  useState} from 'react';
import { Outlet, Link , useNavigate } from "react-router-dom";
import axios from 'axios';


const Jobsavailable = () => {
  const navigate = useNavigate();
    const [products , setProducts] = useState("");

   
useEffect(()=>{
  const fetchdata=async()=>{
    const data = await axios.get('/jobavai');
    console.log(data);
    setProducts(data);
  };
  fetchdata();
},[]);

  return (
    <div >
      <>
      {/* <button type="button" className="btn btn-primary  float-end bi bi-gear-wide">
    <Link className="text-light" to="/sett">
      Settings
    </Link>
  </button> */}
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
      <form className="d-flex">
  <input
    className="form-control me-2"
    type="text"
    id="myInput" 
    placeholder="Enter Qualification [OR] Experience [OR] INSTITUTE NAME  [OR] POST AVAILABLE "
  />
  <button className="btn btn-warning bi bi-search " type="button" onkeyup="myFunction()" >
    Search
  </button>
</form>
<br/>
<br/>
<div className='table-responsive'>
      <table style={{ width: "100%" }} method="GET" className="text-dark" >
    <tbody >
      <tr>
        {/* <th>S.NO</th> */}
         <th>INSTITUE_NAME</th>
      <th>POST_AVAILABLE</th>
      <th>QUALIFICATION_REQUIRED</th>
      <th>EXPERIENCE_REQUIRED</th>
      <th>DEPARTMENT</th>
      <th>LAST_DATE</th>
      <th>APPLY</th>
      </tr>

      {
        products && products?.data.map((product)=>(

         
      <tr>
        
     <td>{product.instname}</td>
      <td>{product.postavailable}</td>
      <td>{product.qualification}</td>
      <td>{product.experience}</td>
       <td>{product.department}</td> 
       <td>{product.date}</td>
        <td><Link to ='/apply'>APPLY</Link></td> 
    </tr>
     

        ))
      } </tbody></table></div>

      
      </>
      {
  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("tr");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("td")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
}
   
    </div>
  )
}

export default Jobsavailable
