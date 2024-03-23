import React,{useEffect ,  useState} from 'react';
import { Outlet, Link , useNavigate } from "react-router-dom";
import axios from 'axios';

const Application = () => {

  const navigate = useNavigate();
  const [products , setProducts] = useState("");



  useEffect(()=>{
    const fetchdata=async()=>{
      const data = await axios.get('/jobapply_');
      console.log(data);
      setProducts(data);
    };
    fetchdata();
  },[]);
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
  <form className="d-flex">
  <input
    className="form-control me-2"
    type="text"
    id="myInput" 
    placeholder="Enter Qualification [OR] Experience  [OR] DEPARTMENT "
  />
  <button className="btn btn-warning bi bi-search " type="button" onkeyup="myFunction()" >
    Search
  </button>
</form>
  <br />

  <center><h1><em>Details of job  seekers who applied for the job</em></h1></center>
  <div class="table-responsive"> 
  <table id="myUL" style={{ width: "100%" }} method="GET" className="text-dark " >
    <tbody >
      <tr>
        {/* <th>S.NO</th> */}
         <th>NAME</th>
         <th>EMAIL</th>
         <th>MOBILE NUMBER</th>
      <th>APPLIED POST</th>
      <th>QUALIFICATION</th>
      <th>EXPERIENCE</th>
      <th>DEPARTMENT</th>
      <th>GITHUB_LINK</th>
      <th>HIRE</th>
      </tr>

      {
        products && products?.data.map((product)=>(

         
      <tr>
        
     <td>{product.name}</td>
      <td>{product.email}</td>
      <td>{product.phone}</td>
      <td>{product.postavailable}</td>
      <td>{product.qualification}</td>
      <td>{product.experience}</td>
       <td>{product.department}</td> 
       <td><Link to ='#'>{product.github}</Link></td> 
        <td><Link className='text-dark' to ='/hire_'>HIRE</Link></td> 
    </tr>
     

        ))
      } </tbody></table> </div>

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
<Outlet />

    </div>
  )
};

export default Application;
