// import axios from '../axios';
import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Fackwork = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [admin, setUser] = useState({
    name: "",
    workingpost: "",
    instituteid: "",
    qualification: "",
    department: "",
    year: "", //retairedyear
    phone: "",
    email: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://projectbackends.onrender.com/workfa_');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...admin, [name]: value });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(product => {
    const searchTerms = searchQuery.toLowerCase().split(" ");
    return searchTerms.every(term =>
      Object.values(product).some(value =>
        value.toString().toLowerCase().includes(term)
      )
    );
  });

  const PostData = async (e) => {
    e.preventDefault();
    const {name ,workingpost,instituteid,qualification,department,year,phone,email}=admin;
    const res = await fetch("https://projectbackends.onrender.com/wfaculty" , {
      method:"POST",
      headers:{
        "Content-Type" :"application/json"
  
      },
        body:JSON.stringify({
            name ,workingpost,instituteid,qualification,department,year,phone,email
        })
    });
    const data = await res.json();
    if(!name||!workingpost||!instituteid||!qualification||!department||!year||!phone||!email){
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
    <div className='facwork-scrool'>
      <div>
      <br/>
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
        
        <br/>
        </div>
 
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      <center><h1><em>Details of Faculty who are working in the institute</em></h1></center>
      <div>
        <br />
        <br />
        <div className="table-responsive">
          <table style={{ width: "100%" }} className="text-dark" method='POST'>
            <tbody>
              <tr>
                <th>NAME</th>
                <th>WORKING_POST</th>
                <th>INSTITUTE_ID</th>
                <th>QUALIFICATION</th>
                <th>DEPARTMENT</th>
                <th>JOINED YEAR</th>
                <th>MOBILE NUMBER</th>
                <th>MAIL_ID</th>
              </tr>
              {
                filteredProducts.map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.workingpost}</td>
                    <td>{product.instituteid}</td>
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
                  <input type="string" name="name" id="name" value={admin.name} onChange={handleInputs} />
                </td>
                <td>
                  <input type="string" name="workingpost" id="workingpost" value={admin.workingpost} onChange={handleInputs} />
                </td>
                <td>
                  <input type="string" name="instituteid" id="instituteid" value={admin.instituteid} onChange={handleInputs} />
                </td>
                <td>
                  <input type="string" name="qualification" id="qualification" value={admin.qualification} onChange={handleInputs} />
                </td>
                <td>
                  <input type="string" name="department" id="department" value={admin.department} onChange={handleInputs} />
                </td>
                <td>
                  <input type="string" name="year" id="year" value={admin.year} onChange={handleInputs} />
                </td>
                <td>
                  <input type="number" name="phone" id="phone" value={admin.phone} onChange={handleInputs} />
                </td>
                <td>
                  <input type="email" name="email" id="email" value={admin.email} onChange={handleInputs} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <button type="submit" name="signup" id="signup" className='btn btn-secondary table-submit' onClick={PostData}>POST</button>
      </div>
      <Outlet />
    </div></div>
  );
};

export default Fackwork;
