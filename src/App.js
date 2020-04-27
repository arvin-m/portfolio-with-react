import React from 'react';
import Navbar from './Component/Navbar/Nav';
import AboutMe from './Component/AboutMe/AboutMe';
import Card from './Component/Card/Card';
import Footer from './Component/Footer/Footer';
import Carousel from './Component/Carousel/Carousel';

import './Component/App.css';



function App() {



  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <AboutMe />
      <Card />
      <Footer />
    </React.Fragment>
  );
};

export default App;
