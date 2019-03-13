import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#ModalContainer')

class SingleImageModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

  }

  componentDidMount() {
    Modal.setAppElement('#modalElement');
  }

  render() {
    return (
      <div onClick={this.props.closeModal}>
        <Modal
          isOpen={this.props.modalIsOpen}
          style={customStyles}
          contentLabel="Single Image Modal">
            <div className="container" id="modalContainer">
                <img src={this.props.image}/>
                <div className="modal-info-list">
                <h3>Björnis - mycket fin</h3>
                <span>Denna gjorde jag en gång</span>
                <span>Tog mycket tid</span>
                <span><b>Pris:</b> Massa pengar</span>
                </div>
            </div>
        </Modal>
      </div>
    );
  }
}

export default SingleImageModal;
