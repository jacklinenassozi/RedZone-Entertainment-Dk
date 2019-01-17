import React, { Component } from 'react';
import './DrawerToggleButton.css';
import image from '../../images/HomepageImages/img5.jpeg';

class DrawerToggleButton extends Component{
render(props){
    return(
        <button className ='toggle-button' onClick={this.click}>
         <img
            src={image}
            width="100%"
            height="50px"
            margin-left='1.5rem'
            className="d-inline-block align-center"
            alt=""
           
          />
<div className ='toggle-button-line' />
<div className ='toggle-button-line' />
<div className ='toggle-button-line' />
</button>
    )
}
}


export default DrawerToggleButton;