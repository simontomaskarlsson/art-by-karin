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
    activeImage: images[0],
    activeImageIndex: 0
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
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  changeActiveImage(index) {
    this.setState({activeImage: images[index]});
    this.setState({activeImageIndex: index});
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    const carouselContainerStyling = {
      display: 'flex',
      flexDirection: 'column',
      width: '50rem',
      height:'50rem',
      visibility: this.state.modalIsOpen ? 'hidden' : 'visible'
    }

    return (

      <div className="App">
        <div id="modalElement">
          <SingleImageModal
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            image={this.state.activeImage}/>
        </div>
        <HeaderMenu isMobile={isMobile}/>
          <header className="App-header">
          <div id="open-modal-button" className="container carousel-container" style={carouselContainerStyling}>
            <div className="open-modal-button" onClick={this.openModal}>piece details</div>
            <DemoCarousel
              images={images}
              selectedItem={this.state.activeImageIndex}
              changeActiveImage={this.changeActiveImage}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
