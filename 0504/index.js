import React from 'react';
import ReactDOM from 'react-dom/client';
import image1 from './car2.webp';
import image2 from './car3.jpg';
import Card from './Card.js'
import Navbar from './Navbar.js';
import Header from './Header';
import Footer from './Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>
  <Navbar></Navbar>
  <Card value="Hundai"description="This is just a props demo" carimg={image1}/>
  <Card value="SCODA"description="SCODA CAR " carimg={image2} />
  <Footer/>
</>
  );

