import React, { Component } from 'react';

import './App.css';

import HeaderMenu from './HeaderMenu.js'
import SingleImageModal from './SingleImageModal';
import DemoCarousel from './DemoCarousel.js';


import * as Helpers from './HelperFunctions';
// -----------------------------------------------------------------------------

//Global variables
const images = Helpers.importAllFilesFromFolder(require.context('./images/', false, /\.(gif|png|jpe?g|svg)$/));

class App extends Component {
  constructor() {
    super();
    this.state = {
    showPopup: false,
    width: window.innerWidth,
    modalIsOpen: false,
    activeImage: images[0]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeActiveImage = this.changeActiveImage.bind(this);
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
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
    this.changeActiveImage();
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  changeActiveImage() {
    var str = document.getElementById("active-image-index-tag").innerHTML;
    var index = str[0];
    this.setState({activeImage: images[index - 1]});
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    return (
      <div className="App">
        <div id="modalElement">
          <SingleImageModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} image={this.state.activeImage}/>
        </div>
        <HeaderMenu isMobile={isMobile}/>
          <header className="App-header">
          <button onClick={this.openModal}>open modal</button>
          <div class="container carousel-container">
            <DemoCarousel images={images}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
