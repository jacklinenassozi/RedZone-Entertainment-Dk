/*
import React from 'react';
import './Footerpage.css';
import image from '../../images/HomepageImages/img5.jpeg';

const Footer = () => {
  return (
    <footer>
      <div id="main-footer">
        <br />
       
        <p>
        <div className='footer1'>
          <img
            src={image}
            width="50px"
            height="50px"
            className="d-inline-block align-center"
            alt=""
          />
         
          ©2017 All rights reserved by RedZone Entertains Dk.
          <br />
          admin email : redzoneentertains@yahoo.com
          </div>
          <div>
          <br />
          redzoneentertains@yahoo.com
         <a href='https://www.facebook.com/'> f</a>
          </div>
          <br />
          <div>
           CVR 35976663
           </div>
          <br />
          +4550206922
          
        </p>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
*/

import React from 'react';
import './Footerpage.css';
//import FooterPage from './components/footerpage/Footerpage';
import image from '../../images/HomepageImages/img5.jpeg';
const Footer = () => {
  return (
    <div className="about-us-container">
      <div className="about">
        
        <p>
        ©2017 All rights reserved by RedZone Entertains Dk.
          <br />
          <a href='redzoneentertains@yahoo.com'>admin email</a> 
        </p>
        
        
        <p>CVR 35976663
           
          <br />
          +4550206922 </p>
        <br />
        
        <p>
        
           <img
            src={image}
            width="50px"
            height="50px"
            className="d-inline-block align-center"
            alt=""
          /></p>

          <p>redzoneentertains@yahoo.com
          <br />
        bookings@redzoneentertains@yahoo.com
        </p>
        <p>Developed by  | RZE</p>
      </div>

      
     
    </div>
   
  );
  
};

export default Footer;

