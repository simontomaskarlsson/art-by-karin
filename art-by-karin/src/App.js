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
  render() {
    return (
      <div className="App">
      <HeaderMenu />
      <span id="myspan"></span>
        <header className="App-header">
          <DemoCarousel images={images}/>
        </header>
      </div>

    );
  }
}

export default App;
