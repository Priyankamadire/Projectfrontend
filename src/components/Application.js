import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Application = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [showHiredPopup, setShowHiredPopup] = useState(false);
  const [showRejectedPopup, setShowRejectedPopup] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('https://projectbackends.onrender.com/jobapply_');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleHireClick = () => {
    // Logic for hiring
    setShowHiredPopup(true);
    // Additional logic if needed
  };

  const handleRejectClick = () => {
    // Logic for rejection
    setShowRejectedPopup(true);
    // Additional logic if needed
  };

  const filteredProducts = products.filter(product => {
    const searchTerms = searchQuery.toLowerCase().split(" ");
    return searchTerms.every(term =>
      Object.values(product).some(value =>
        value.toString().toLowerCase().includes(term)
      )
    );
  });

  return (
    <div>
      <>
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
        <br/>
        
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>

        <br />
        <center><h1><em>Details of job seekers who applied for the job</em></h1></center>
        <div className="table-responsive">
          <table style={{ width: "100%" }} method="GET" className="text-dark" >
            <tbody >
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>MOBILE NUMBER</th>
                <th>APPLIED POST</th>
                <th>QUALIFICATION</th>
                <th>EXPERIENCE</th>
                <th>DEPARTMENT</th>
                <th>RESUME_LINK</th>
                <th>HIRE</th>
                <th>Reject</th>
              </tr>
              {filteredProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.email}</td>
                  <td>{product.phone}</td>
                  <td>{product.postavailable}</td>
                  <td>{product.qualification}</td>
                  <td>{product.experience}</td>
                  <td>{product.department}</td>
                  <td><a href={product.github}>{product.github}</a></td>
                  <td><button onClick={handleHireClick} className='btn btn-success'>HIRE</button></td>
                  <td><button onClick={handleRejectClick} className='btn btn-danger'>Reject</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* {showHiredPopup && (
          <div className="popup">
            {window.alert("Hired Successfully")}

          </div>
        )}
        {showRejectedPopup && (
          <div className="popup">
           {window.alert("Application Rejected")}
          </div>

        )} */}
      {showHiredPopup && (
  <div className="popup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div>
      <h3><em>Confirm hiring</em></h3>
      <button className="btn btn-warning" onClick={() => { setShowHiredPopup(false); window.alert("Hired Successfully"); }}>Yes</button>
    </div>
  </div>
)}
{showRejectedPopup && (
  <div className="popup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div>
      <h3><em>Reject Application</em></h3>
      <button className="btn btn-warning" onClick={() => { setShowRejectedPopup(false); window.alert("Application Rejected"); }}>Yes</button>
    </div>
  </div>
)}


      </>
    </div>
  );
};

export default Application;
