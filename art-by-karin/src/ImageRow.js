import React, { Component } from 'react';
import Image from './Image.js'
import logo from './images/logo.svg';
import logo2 from './images/ex1.jpg';


class ImageRow extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <Image url={logo}/>
                <Image url={logo2}/>
                <Image />
            </div>
        </div>
    );
  }
}

export default ImageRow;

