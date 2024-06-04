import React from 'react'; 

// importing use state to control our nav elements on smaller devices
import { useState } from 'react';

//importing link to use the react link property to navigate a single-page applicaion
import { Link } from "react-router-dom";

//importing an image (hamburger dropdown icon) as a react component with name 'Hamburger'
import {ReactComponent as Hamburger} from '../hamburgermenu4.svg';

//importing my main css file in order to style my elements in this page
import '../mainpage.css';


//declaring a comoponent 'Navbar' to house my navbar page features

function Navbar() {

    //declaring showNavbar and setShowNavbar to toggle nav links on smaller devices (useState set automatically to false;)
   
    const [showNavbar, setShowNavbar] = useState(false)
    
    //invoking the handleShowNavbar function on the Hamburger component below (line 24), will set the showNavbar to true (!showNavbar, meaning logical not ). When the showNavbar is true, the sidebar containing the nav links will show//
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className='navelements'>
            <div className='navcontainer'>
             <div className='mydiv'><h1 className='myhdn'>Esplendeeda</h1> <p className='su'>SUITES</p></div>
             
             {/* clicking on the image inside this div will invoke the handleShowNavbar function - to display the nav bar elements on smaller devices */}
             <div className="menuicon" onClick={handleShowNavbar}>
          {/* our imported image (a hamburger dropdown icon) as a react component 'Hamburger" */}
          <Hamburger/>
        </div>
        {/* addin the 'active' classname to style showNavbar when it is set true */}
            <div className={`navlinks  ${showNavbar && 'active'}`}>
                {/* unorder lists housing the link tags on the nav bar */}
                <ul>
                <li>
                    <Link to="/home">HOME</Link>
                    </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                    </li>
                <li>
                    <Link to="/contact">CONTACT US</Link>
                    </li>
                <li>
                     <Link to="/">BOOKINGS</Link>
                    </li>
            </ul>
        </div>
        </div>
        </nav>
    );
}

// exporting the Navbar component so that it can be imported in ny other file
export default Navbar;