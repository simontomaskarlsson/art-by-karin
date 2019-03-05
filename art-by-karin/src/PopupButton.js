import React, { Component } from 'react';
import Popup from './Popup.js'
import IconAnimation from './IconAnimation.js'
import emailIcon from './icons/emailIcon.png'

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
      <div>
        <a className="effect-underline" onClick={this.togglePopup.bind(this)}>Contact<IconAnimation image={emailIcon} /></a>
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
