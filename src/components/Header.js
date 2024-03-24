import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${isNavbarOpen ? 'show' : ''}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <img
            src="https://icon-library.com/images/faculty-icon/faculty-icon-17.jpg"
            alt="Logo"
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />
            {/* <img src="https://icon-library.com/images/faculty-icon/faculty-icon-20.jpg" alt="Logo" /> */}
          </Link>
          <button
            className="navbar-toggler btn btn-light"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isNavbarOpen ? 'show' : ''}`} id="menubar">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item mx-3" onClick={closeNavbar}>
                <Link className="nav-link bi bi-house-fill text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3" onClick={closeNavbar}>
                <Link className="nav-link bi bi-ticket-fill text-light" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item mx-3" onClick={closeNavbar}>
                <Link className="nav-link bi bi-newspaper text-light" to="/vacancies">
                  VACANCIES
                </Link>
              </li>
              <li className="nav-item mx-3" onClick={closeNavbar}>
                <Link className="nav-link bi bi-patch-question-fill text-light" to="/faq">
                  FAQS
                </Link>
              </li>
              <li className="nav-item mx-3" onClick={closeNavbar}>
                <Link className="nav-link bi bi-person-lines-fill text-light" to="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item mx-3" onClick={closeNavbar}>
                <Link className="nav-link bi bi-sign-turn-right-fill text-light" to="/signin">
                  LOGIN/SIGN_UP
                </Link>
              </li>
              <li className="nav-item mx-3" onClick={closeNavbar}>
                <Link className="nav-link bi bi-file-earmark-post-fill text-light" to="/sup_log">
                  POST_JOB
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
