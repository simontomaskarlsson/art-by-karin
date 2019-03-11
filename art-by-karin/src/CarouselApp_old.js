import React, { Component } from 'react';


import ImageRow from './ImageRow.js';
import DemoCarousel from './DemoCarousel.js';


// -----------------------------------------------------------------------------

//Global variables

class CarouselApp extends Component {
  render() {
    return (
        <div className="container carousel-container">
          <DemoCarousel images={images}/>
        </div>
    );
  }
}

export default CarouselApp;
