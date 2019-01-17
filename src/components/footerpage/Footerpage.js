
import React from 'react';
import './Footerpage.css';
import image from '../../images/HomepageImages/img5.jpeg';

const Footer = () => {
  return (
    <footer>
      <div id="main-footer">
        <br />
       
        <p>

          <img
            src={image}
            width="50px"
            height="50px"
            className="d-inline-block align-center"
            alt=""
          />
          ©2017 All rights reserved by RedZone Entertains Dk.
          <br />
          redzoneentertains@yahoo.com
          <br />
           CVR 35976663
          
          <br />
          +4550206922
          
        </p>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
