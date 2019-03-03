import React, { Component } from 'react';
import Popup from './Popup.js'

class PopupButton extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='"effect-underline">'>
        <a onClick={this.togglePopup.bind(this)}>Contact</a>    
        {this.state.showPopup ? 
          <Popup
            text='jesper@gmail.com'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
};

export default PopupButton
