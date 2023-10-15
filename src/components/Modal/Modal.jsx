import React, { useEffect } from 'react';
import {
  BtnStyled,
  ContenStyled,
  ImageStyled,
  ModalStyled,
} from './StyledModal';

function Modal({ isOpen, imageUrl, onClose }) {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = event => {
      if (event.target.tagName !== 'IMG') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <ModalStyled>
      <ContenStyled>
        <ImageStyled src={imageUrl} alt="Modal Image" />
        <BtnStyled onClick={onClose}>X</BtnStyled>
      </ContenStyled>
    </ModalStyled>
  );
}

export default Modal;
