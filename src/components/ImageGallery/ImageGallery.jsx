import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './styledImageGallery';

function ImageGallery(props) {
  return (
    <List>
      {props.images.map(element => (
        <ImageGalleryItem
          src={element.webformatURL}
          alt={element.tags}
          key={element.id}
          url={element.largeImageURL}
        />
      ))}
    </List>
  );
}

export default ImageGallery;
