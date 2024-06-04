import React  from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './navelements/navbar';
import Home from './navelements/home';
import About from './navelements/about';
import Contactus from './navelements/contact';
import { Mainpage } from './mainpage';

//I have imported above the different link pages in other to route them - make them work as a single page application
//importing route and routes from react-router-dom helps us achieve this

//exporting the Rendr component so that it can be imported somewhere else in my folder
export default function Rendr() { 
    return ( 
     <div>
       <Navbar/>
        <Routes>
       
     <Route exact path="/" element={<Mainpage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contactus />} />
      
     
      </Routes>
       </div>
    );
   }
 