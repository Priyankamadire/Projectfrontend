import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Notification = () => {
  const [products, setProducts] = useState([]);
  const [hires, setHires] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('https://projectbackends.onrender.com/jobavai');
        const datan = await axios.get('https://projectbackends.onrender.com/hiring');
        setProducts(data.data);
        setHires(datan.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className='notif-scrool'>
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
      
 
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h1 className="mb-4">Notifications</h1>
          <div>
            {products.map((product, index) => (
              <div key={index} className="alert alert-primary mb-3" role="alert">
                <i className="bi bi-bell-fill me-2" />
                You have a new faculty post from {product.instname} Institute.{' '}
                <Link to="/apply">Click here to apply</Link>
              </div>
            ))}
            
          </div>
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-vector/push-notifications-concept-illustration_114360-4986.jpg?w=2000"
            alt="Push Notifications"
          />
        </div>
      </div>   </div>
    </div></>
  );
};

export default Notification;
