import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//importing browserrouter in order to employ react routing
import { BrowserRouter } from 'react-router-dom';
//importing the Rendr fuction from my rendernav file
import Rendr from './newfolder/rendernav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* Rendering the Rendr Function inside a browserrouter tage in order to implement 
    react routing for a single page application (where you can navigate links without having to be redirected to another page) */}
    <Rendr/>
       </BrowserRouter>
  </React.StrictMode>
);



