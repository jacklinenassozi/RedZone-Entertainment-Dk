import React from 'react';
import './AboutUs.css';
import image from '../../images/HomepageImages/img39.jpeg';
//import Icon from "react-native-vector-icons/Ionicons";
import ReactPlayer from 'react-player'


class AboutUs extends React.Component {
 render () {
   return (
     <form className='demoForm'>
     <div className="about-us-container">
     <div id="about">
     <ReactPlayer url='https://www.facebook.com/josechameleone/videos/342493853180545/?t=7' playing width='100%' height='100%'/>
    
     </div>

      <div id="contact">
      <div id ='heading'>
        <h3>ABOUT US:</h3>
        </div>
        <p>
          Home2Africa is an annual event which has taken since 2017 in Denmark .
          Home2Africa celebrates African Culture in Denmark.Music ,Fashion and Dance
        </p>
        <p>
          Intergration is a key problem for artists and their host countries.I seek to help solve this problem by promoting and publicizing events through radio,television digital or email advertising.I ensure that artists have everything they need offstage and on,from hotel rooms and sound checks.I typically create a contract outlinig thr terms of the agreement ,including fees owed to thr promoter ,date and time of rehearsals,the length of the band's performance and any other demands.
        </p>
        <p>
         With this festival we bring together Africans in Schengen irregardless of culture or ethnic background
        </p>
        <p>Funded by RedZone Entertains </p>
        <br />
      </div>
      
    </div>


   <div className='mainContainer'>
   <div className='info'>
   <div className='code'>
   
<h3>DRESS CODE</h3>
<p>Dress to impress.Please
  <br />
  dress in a free style 
</p>
</div>
<div className='tickets'>
<h3>TICKET SALE</h3>
<p>Buy tickets at our website.OR
  <br />
  contact us via mobile or email
</p>
</div>
<div className='packing'>
<h3>PARKING</h3>
<p>for parking information.Please
  <br />
  visit the venue page 
</p>
</div>
<div className='coat'>
<h3>COAT CHECK</h3>
<p>Check your jacket at the venue please 
</p>
</div>
   </div>

     <div className='signUp'>
       <h2>CONTACT US</h2>

       <div className='adress'>
<h3>ADDRESS
<br />
Værebrovej 111,
  <br />
  bagsværd DK
  </h3>
</div>
<div className='email'>
<h3>EMAIL
  <br />
byabagabo@gmail.com
</h3>
</div>
<div className='tel'>
<h3>TELL
  <br />
  +45 40 20 69 22
</h3>
</div>


<div className='container'>
<div className="form-row">
              <div className="col-md-5">
                <div className="form-group">
                  <label></label>
                  <input
                  type='text'
                    className="form-control"
                    id="organisation_logo"
                    name="organisation_logo"
                    placeholder="Name*"
                    
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label></label>
                  <input
                    className="form-control"
                    id="organisation_url"
                    name="organisation_url"
                    placeholder="Phone"
                    
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <label></label>
                  <input
                    className="form-control"
                    id="organisation_address"
                    name="organisation_address"
                    placeholder="Email*"
                    
                    
                  />
                </div>
              </div>
              
            </div>
           <div>
           <div className="form-row" />
           <div className="col-md-6">
                <div className="form-group">
                <label></label>
                <textarea
                    className="form-control"
                    id="organisation_description"
                    name="organisation_description"
                    form="networkingFormId"
                    rows="3"
                    placeholder='message*'
                  />
  </div>
</div>
 </div>
 <button type='submit' className='btn btn-primary'>
          Send
       </button>
 </div>




       </div>
       <div className='redzone'>
       <h3>STAY UP TO DATE
<br />
Signup to our news letter for all our latest news
<div>
  <label></label>
  <input
    placeholder="Email*"
   />
  </div>
  <button type='submit' className='btn btn-primary'>
          Subscribe
       </button>
  </h3>
       
       <p>
       <img
            src={image}
            width="10%"
            height="0%"
           margin='0px'
            opacity='0.9'
            className="d-inline-block align-center"
            alt=""
          /></p>

       </div>
       

       </div>

     </form>
   )
 }
}
export default AboutUs;