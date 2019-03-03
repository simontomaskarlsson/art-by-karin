import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function DemoCarousel(props) {
  var imageItems = props.images.map(function(image){
    var legend = image.split(".")[0];
    return <div><img src={image}/><p className="legend">{legend}</p></div>
  })
  return (
    <Carousel
    width="50rem"
    centerMode="true"
    centerSlidePercentage="80"
    transitionTime="1000">
    {imageItems}
    </Carousel>
  );
}

const imageStyle = {
  width: '40rem',
  padding: '4rem'
};

export default DemoCarousel;

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
