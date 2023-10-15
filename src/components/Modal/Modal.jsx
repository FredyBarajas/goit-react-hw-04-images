import React, { Component } from 'react';
import {
  BtnStyled,
  ContenStyled,
  ImageStyled,
  ModalStyled,
} from './StyledModal';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleKeyPress = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOutside = event => {
    if (event.target.tagName !== 'IMG') {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, imageUrl } = this.props;

    if (!isOpen) return null;

    return (
      <ModalStyled className="modal-overlay">
        <ContenStyled className="modal">
          <ImageStyled src={imageUrl} alt="Modal Image" />
          <BtnStyled className="modal-close-btn" onClick={this.props.onClose}>
            X
          </BtnStyled>
        </ContenStyled>
      </ModalStyled>
    );
  }
}

export default Modal;
