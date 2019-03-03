import React, { Component } from 'react';

import './App.css';

import HeaderMenu from './HeaderMenu.js'
import ImageRow from './ImageRow.js';
import DemoCarousel from './DemoCarousel.js';

import * as Helpers from './HelperFunctions';
// -----------------------------------------------------------------------------

//Global variables
const images = Helpers.importAllFilesFromFolder(require.context('./images/', false, /\.(gif|png|jpe?g|svg)$/));

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    return (
      <div className="App">
      <HeaderMenu isMobile={isMobile}/>
        <header className="App-header">
        <div class="container carousel-container">
          <DemoCarousel images={images}/>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
