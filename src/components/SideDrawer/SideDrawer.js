import React, { Component } from 'react';
import './SideDrawer.css';

class SideDrawer extends Component{
render(props){
    return(
        <nav className='side-drawer'>
            <ul>
            <li><a href="#">Home</a></li>
                <li><a href="#">Artists</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </nav>
    )
}
}


export default SideDrawer;