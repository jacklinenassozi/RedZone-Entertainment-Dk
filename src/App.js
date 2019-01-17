import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
//import Navbar from './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import HomePage from './components/HomePage/HomePage';
import Artists from './components/artists/Artists'
import Concerts from './components/concerts/Concerts'
import Services from './components/services/Services'
import FooterPage from './components/footerpage/Footerpage';
import AboutUs from './components/AboutUs/AboutUs';
//import image from './imgt.jpeg';


//const root = document.getElementById('root')

class App extends Component {

  state={
    sideDrawerOpen:false
  }
DrawerToggleClickHandler =()=>{
this.setState((prevState)=>{
return{sideDrawerOpen:!prevState.sideDrawerOpen};
})
};
backDropClickHandler=()=>{
  this.setState({sideDrawerOpen:false})
}

  render() {
    let sideDrawer;
    let backDrop;

    if(this.state.sideDrawerOpen){
      sideDrawer=<SideDrawer />;
      backDrop=<BackDrop click={this.backDropClickHandler}/>
    }
    return (
      
      <div tyle={{height:'100%'}}>
      
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {/*
        <SideDrawer />
        <BackDrop />
        */}
        {sideDrawer}
        {backDrop}
        <main style={{marginTop:'64px'}}>
          <p> </p>
        </main>
        <Route exact path="/" component={HomePage} />
       <Route exact path="/about" component={AboutUs} />
       <Route exact path="/artists" component={Artists} />
       <Route exact path="/concerts" component={Concerts} />
       <Route exact path="/services" component={Services} />
        <HomePage />
        
        <FooterPage />
      </div>
      
    );
  }
}

export default App;
