import React, { useState } from 'react';
import { Image, Item } from './styledImageGalleryItem';
import Modal from 'components/Modal/Modal';

function ImageGalleryItem({ src, alt, url }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Item>
        <Image src={src} alt={alt} onClick={handleImageClick} />
      </Item>
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={url} />
      )}
    </>
  );
}

export default ImageGalleryItem;
