import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import * as Helpers from './HelperFunctions';


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import SingleImageApp from "./SingleImageApp";

const imagesUrls = Helpers.importAllFilesFromFolder(require.context('./images/', false, /\.(gif|png|jpe?g|svg)$/));


class CarouselApp extends Component {
  render() {
    var imageItems = imagesUrls.map(function(image){
      var legend = image.substring(image.lastIndexOf("/")+1, image.indexOf("."));
      var navLink = "/SingleImageApp/" + image.split("/").slice(-1)[0];
      return (
        <div>
          <img src={image}/>
          <p className="legend">
            <HashRouter>
              <div>
                <NavLink to={navLink}>
                  <span>{legend}</span>
                </NavLink>
                <div className="content">
                  <Route path={navLink} component={SingleImageApp} />
                </div>
              </div>
            </HashRouter>
          </p>
        </div>
      );
    });
    return (
      <div class="container carousel-container">
        <Carousel
          centerMode={true}
          centerSlidePercentage={100}
          transitionTime={1000}>
          {imageItems}
        </Carousel>
      </div>
    );
  }
}

export default CarouselApp;

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
