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
    Modal.setAppElement('#modalContainer');
  }

  render() {
    return (
      <div onClick={this.props.closeModal}>
        <Modal
          isOpen={this.props.modalIsOpen}
          style={customStyles}
          contentLabel="Single Image Modal">
            <img src={this.props.image}/>
        </Modal>
      </div>
    );
  }
}

export default SingleImageModal;
