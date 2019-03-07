import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import SingleImageApp from "./SingleImageApp";

class DemoCarousel extends Component {
  render() {
    var imageItems = this.props.images.map(function(image){
      var legend = image.substring(image.lastIndexOf("/")+1, image.indexOf("."));
      return (
        <div>
          <img src={image}/>
          <p className="legend">
            <HashRouter>
              <div>
                <NavLink to="/SingleImageApp">
                  <span>{legend}</span>
                </NavLink>
                <div className="content">
                  <Route path="/SingleImageApp"
                  render={(props) => <SingleImageApp {...props} image={image}/>}/>
                </div>
              </div>
            </HashRouter>
          </p>
        </div>
      );
    });
    return (
      <Carousel
        centerMode={true}
        centerSlidePercentage={100}
        transitionTime={1000}>
        {imageItems}
      </Carousel>
    );
  }
}

export default DemoCarousel;

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
