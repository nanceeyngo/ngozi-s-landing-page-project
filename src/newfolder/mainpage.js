import React  from 'react';
//importing my css file to style my elements
import './mainpage.css';
//importing the FormComponent component from my form.js file to render it on my main page
import FormComponent from './form';
//importing react link in order to navigate nav links
import { Link } from 'react-router-dom';
//importing downloaded images from their directories in order to use them as images in my web page
import breakfast from './breakfast.png';
import frontbus from './frontbus.png';
import building from './building.png';
import roomservice from './roomservice.png';
import onlinebooking from './onlinebooking.png';
import parking from './parking.png';



//exporting the Mainpage function in order to import it somewhere else in my folder
export function Mainpage () {
    return (
       //in react rendering element tags must be wrapped in a parent tag, e.g. div
       <div>
    <div>
    {/* a div housing a text I animated using css animation 'type' */}
    <div className='container'><p className='frstp'>....Crafting Comfort, Creating Memories</p></div>
    {/* a div housing my page heading */}
    <div><h2 className='hotel'>HOTEL & RESORT BOOKING</h2></div>
    </div>
    {/* a text section */}
    <section className='nxtsctn'>
<p className='nxtp'>Plan your next getaway to the enchanting city of Abuja and make 
   Esplendeeda Suites your ultimate destination! 
   With its 
   <ul>
    <li className='newlist'>Chic accommodations</li><br></br>
    <li className='newlist'>Exceptional dining experiences infused with local flavors</li><br></br>
    <li className='newlist'>State-of-the-art amenities</li>
   </ul> 
   our hotel invites you to immerse yourself in a world of 
   indulgence and relaxation.</p>
</section>
<h2 className='services'>OUR SERVICES INCLUDE:</h2> 
{/* container used to house my images container and my form container */}
<div className='boxform'>
<div className='myimgs'>
  {/* using the imported images in my img tag; note that the src is contained in a curly brace because of the method in which it was imported */}
    <div className='box'><img src= {breakfast} alt='BREAKFAST'/><span>BREAKFAST</span></div>
    <div className='box'><img src={roomservice} alt='ROOM SERVICE'/><span>ROOM SERVICE</span></div>
    <div className='box'><img src={frontbus} alt='FREE SHUTTLE'/><span>FREE SHUTTLE</span></div>
    <div className='box'><img src={building} alt='BUSINESS CENTER'/><span>BUSINESS CENTER</span></div>
    <div className='box'><img src={onlinebooking} alt='INTERNET ACCESS'/><span>INTERNET ACCESS</span></div>
    <div className='box'><img src={parking} alt='PARKING'/><span>PARKING</span></div>
    
    </div>
    {/* rendering the FormComponent in my main page */}
    <div className='frmdiv'><FormComponent/></div>
  
</div>
{/* the footer tag, specifying details to be shown at the end of my page */}
  <footer>
  <div className='firstft'>
  <h1>OUR MISSION</h1>
  <p>The mission of Esplendeeda Suites is to put hospitality services on the 
  highest level in order to satisfy the demands and expectations of guests. 
  Our aim is to make the Hotel Grand a place for encounters, business success, 
  pleasant meetings and gala ceremonies.</p>
  </div>
  <div className='scndft'>
  <h1>OUR VISION</h1>
  <p>The ideology of our vision is to continue to apply and set the highest standards 
    of service quality and in that way justify and uphold the reputation that we have among the guests, 
    partners, competitors and the wider community. We use and constantly introduce 
    environmentally friendly technologies and processes in order to remain in 
    balance with nature and also meet the needs of contemporary society.</p>
  </div>
  <div className='ftlink'><Link to="/contact">CONTACT US</Link></div>
  <div>
    © 2024 Esplendeeda. All rights reserved
  </div>
  </footer>  
  
  
   </div>

   
  
     )
    }

    // <a href="https://www.freepik.com/icon/breakfast_2652631">Icon by justicon</a>
    // <a href="https://www.freepik.com/search">Icon by Eucalyp</a>
    // <a href="https://www.freepik.com/search">Icon by Freepik</a>
    // <a href="https://www.freepik.com/search">Icon by smalllikeart</a>
    // <a href="https://www.freepik.com/search">Icon by HideMaru</a>
    // <a href="https://www.freepik.com/search">Icon by Marz Gallery</a>
    //<a target="_blank" href="https://icons8.com/icon/36389/menu">Hamburger Menu</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    

    
            /* <video className='sample' autoPlay loop muted poster='https://t3.ftcdn.net/jpg/06/77/55/64/240_F_677556462_ZlcsuON6pflbF9lUPc5YlkcnixK1Ry3A.jpg'>
                <source src='https://marketplace.canva.com/EAFSujYh53Y/2/document_400w/canva-4gKa5AiMupU.mp4' type='video/mp4'></source>
            </video> */
       
   

