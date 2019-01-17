//import react from 'react';
import React, { Component } from 'react';
import './Navbar.css'
//import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


class Navbar extends Component{
    render(props){
        return (
            <header className='navbar'>
            <nav className='navbar_navigation'>
            <div>
                <DrawerToggleButton click={this.drawerClickHandler}/>
            </div>
            <div className='navbar-logo'>
            <a href="#">REDZONE 
            <br />
            ENTERTAINS</a>
            </div>
            <div className='spacer'/>
            <div className='navbar_navigation_items'>
            <ul>
                {/*
                <li><a href="#">Home</a></li>
                <li><a href="#">Artists</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                */}
               
    <li className="nav-item">
    <a href="/" className="nav-link">
                Home
              </a>
      </li>
      <li className="nav-item">
      <a href="/artists" className="nav-link">
                Artists
              </a>
      </li>
      <li className="nav-item">
      <a href="/concerts" className="nav-link">
                Concerts
              </a>
      </li>
      <li className="nav-item">
      <a href="/services" className="nav-link">
      Services
              </a>
              </li>
      <li className="nav-item">
      <a href="/about" className="nav-link">
                About Us
              </a>
      </li>
      
            </ul>
            
            </div>
            </nav>
            </header>
        )
        
    }
}
export default Navbar;

