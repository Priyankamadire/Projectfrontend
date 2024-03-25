import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Jobsavailable = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('https://projectbackends.onrender.com/jobavai');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchdata();
  }, []);

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

  return (
    <div className='jobsavai-scrool'>
      <div>
      <div>
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
      </div>
      <br />
      <div>
         
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
        <br />
        <div className='table-responsive'>
          <table style={{ width: "100%" }} method="GET" className="text-dark" >
          <tbody>
              <tr>
                <th>INSTITUE_NAME</th>
                <th>POST_AVAILABLE</th>
                <th>QUALIFICATION_REQUIRED</th>
                <th>EXPERIENCE_REQUIRED</th>
                <th>DEPARTMENT</th>
                <th>LAST_DATE</th>
                <th>APPLY</th>
              </tr>
           
            
              {filteredProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.instname}</td>
                  <td>{product.postavailable}</td>
                  <td>{product.qualification}</td>
                  <td>{product.experience}</td>
                  <td>{product.department}</td>
                  <td>{product.date}</td>
                  <td><Link to='/apply'>APPLY</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></div>
    </div>
  )
}

export default Jobsavailable;
