import React from 'react';
import './HomePage.css';
//import backgroundImage from '../../images/pexels1.jpeg';
import image from '../../images/HomepageImages/img4.jpeg';

const HomePage = () => (
  <div className="homepage-container font-weight-normal px-5 h-auto">
  
    <h1 className="welcome-page text-white">The Online Platform Project</h1>
    <div className="container text-white">
      <h4 className="p-2">REDZONE ENTERTAINS 
      </h4>
      <h5 className="p-2">Am a music promoter.Someone who publicizes and promotes perfomances.I organise gigs bookbands or artists and advertise the shows to bring in paying attendees and profits</h5>
      <p className="text-center">
      Intergration is a key problem for artists and their host countries.I seek to help solve this problem by promoting and publicizing events through radio,television digital or email advertising.I ensure that artists have everything they need offstage and on,from hotel rooms and sound checks.I typically create a contract outlinig thr terms of the agreement ,including fees owed to thr promoter ,date and time of rehearsals,the length of the band's performance and any other demands.
      </p>
      <br />
      <p className="text-center">
      There isnt a formal education path required to become a music promoter .The most essential skills are a love of music and business savvy.The ability to negotiate effectively is essential as you will need to bargain with artists ,venues,hotels and more understanding different asspects of business is important
      </p>
      <br />
      
    </div>
  </div>
);

export default HomePage;
