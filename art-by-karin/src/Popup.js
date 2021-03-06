import React from 'react';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h3>{this.props.text}</h3>
        <a onClick={this.props.closePopup}><h4>Close</h4></a>
        </div>
      </div>
    );
  }
}

export default Popup;
