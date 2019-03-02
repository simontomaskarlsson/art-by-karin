import React, { Component } from 'react';
import './App.css';
import HeaderMenu from './HeaderMenu.js'
import ImageRow from './ImageRow.js';
import * as Helpers from './HelperFunctions';

//Global variables
const images = Helpers.importAllFilesFromFolder(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderMenu />
        <header className="App-header">
              <ImageRow images={images} />
              <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>

    );
  }
}

export default App;
