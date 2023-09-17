import React, { Component } from 'react';
import { Image, Item } from './styledImageGalleryItem';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  handleImageClick = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { src, alt, url } = this.props;

    return (
      <>
        <Item>
          <Image src={src} alt={alt} onClick={this.handleImageClick} />
        </Item>
        <Modal
          isOpen={this.state.modalOpen}
          onClose={this.closeModal}
          imageUrl={url}
        />
      </>
    );
  }
}

export default ImageGalleryItem;
