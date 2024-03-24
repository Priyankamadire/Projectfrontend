import React from 'react';

const Footer = () => {
  return (
    <footer style={{ position: 'fixed',
     bottom: '0', width: '100%',
      backgroundColor: 'rgba(20, 1, 129, 0.768)',
       padding: '20px 0', 
       textAlign: 'center' }}>
      {/* Your footer content goes here */}
     
      <div className='footer-content'>
      <a href="madirepriyanka01@gmail.com" style={{ marginRight: '10px' }}><i className="fas fa-envelope text-light"></i></a>

      <a href="https://github.com/Priyankamadire" style={{ marginRight: '10px' }}><i className="fab fa-github text-light"></i></a>
        {/* <a href="https://www.instagram.com/" style={{ marginRight: '10px' }}><i className="fab fa-instagram text-light"></i></a> */}
        <a href="https://www.linkedin.com/in/madire-priyanka-9679b426b/" style={{ marginRight: '10px' }}><i className="fab fa-linkedin text-light"></i></a>
        <a href="https://www.telegram.me/" style={{ marginRight: '10px' }}><i className="fab fa-telegram text-light"></i></a>
     
      </div>
    </footer>
  );
};

export default Footer;
