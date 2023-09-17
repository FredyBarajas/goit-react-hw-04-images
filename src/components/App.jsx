import React, { useState, useEffect } from 'react';
import { searchImages, total } from 'petition';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

function App() {
  const [searchWord, setSearchWord] = useState('casa');
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  const [images, setImages] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchImagesFunction = async () => {
    setIsLoading(true);
    try {
      const response = await searchImages(page, per_page, searchWord);
      console.log(response);
      setImages(prevImages => [...prevImages, ...response.data.hits]);
      setShowButton(page < Math.ceil(total / 12));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSearch = newSearch => {
    setSearchWord(newSearch);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  // eslint-disable-next-line
  useEffect(() => {
    searchImagesFunction();
  }, [page, per_page, searchWord]);

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      {isLoading ? (
        <Loader />
      ) : showButton ? (
        <Button onClick={handleLoadMore} />
      ) : (
        <p>Sorry, no more images</p>
      )}
    </div>
  );
}

export default App;
