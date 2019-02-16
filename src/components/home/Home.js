import React from 'react';
//import './Home.css';
import './Home.css';
//import image from '../../images/img5.jpeg';
//import image from '../../images/HomepageImages/img39.jpeg';
import ReactPlayer from 'react-player'

const Home = () => {
  return  (
    <div className ='home'>
    <ReactPlayer url='https://www.facebook.com/josechameleone/videos/342493853180545/?t=7' playing width='70%' 
    
    />
      {/*
     <ReactPlayer url='https://youtu.be/FfjWjUYZoqw' playing />
     
      */} 
      
     </div>
     
  );
};

export default Home;
