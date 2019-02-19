import React, { Component } from 'react';
import Image from './Image.js'

function ImageRow(props) {
    var imageItems = props.images.map(function(image){
                    return <Image url={image}/>;
                  })
    return (
        <div className="container">
            <div className="row">
                { imageItems }
            </div>
        </div>
    );
  }

export default ImageRow;
