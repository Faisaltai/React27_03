import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import myimage1 from './screenshot1.png';
import myimage2 from './screenshot4.png';

import Header from './Header';
import Footer from './Footer'; //import component
import Section from './Section';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>  
  <Section/>
  <Footer/>  {/*call component*/}
  </>
  //{empty tag to return multiple tags}
    // <> 
    // <h1 align="center" >Welcome to React</h1>
    // <h3>TOPS TECHNOLOGIES</h3>
    // <img src={myimage1} alt="" className="img1"/>
    // <img src={myimage2} alt=""/>
    // </>
);

