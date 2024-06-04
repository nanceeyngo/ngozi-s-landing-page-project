import React from "react";
import { Link } from "react-router-dom";

//I have imported Lind from react-router-dom in order to use a link in this page

//declaring a comoponent 'Home' to house my home page features
const Home = () => { 
    return ( 
       <div>
        {/* here I used the video tag to insert a video, using a video web address */}
         <video className='sample' autoPlay loop muted poster='https://t3.ftcdn.net/jpg/06/77/55/64/240_F_677556462_ZlcsuON6pflbF9lUPc5YlkcnixK1Ry3A.jpg'>
           <source src="https://videos.pexels.com/video-files/5759204/5759204-sd_540_960_30fps.mp4" type="video/mp4"/>
           {/* https://marketplace.canva.com/EAFSujYh53Y/2/document_400w/canva-4gKa5AiMupU.mp4 */}
           </video>
        <h1 className="homehd">Welcome to Esplendeeda SUITES</h1>
       
       {/* I inserted a Link to my default page (landing page) in this button tage so that when it is clicked, 
       it automatically directs you to the landing page */}
        <button className='homebtn' type="button"><Link to="/">CLICK HERE TO GET STARTED!</Link></button>
      </div> 
      
    ); 
} 
export default Home; 
