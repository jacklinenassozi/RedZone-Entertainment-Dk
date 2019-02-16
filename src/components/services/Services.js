import React from 'react';
//import './Artists.css';
//import image from '../../images/img5.jpeg';
import ReactPlayer from 'react-player'

const Services = () => {
  return  (
    <div>
     <ReactPlayer url='https://www.facebook.com/josechameleone/videos/342493853180545/?t=7' playing />
     <ReactPlayer url='https://youtu.be/FfjWjUYZoqw' playing />
     </div>
  );
};

export default Services;
