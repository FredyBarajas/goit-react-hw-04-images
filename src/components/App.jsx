import React, { useState, useEffect, useCallback } from 'react';
import { searchImages, total } from 'PixabayApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

function App() {
  const [searchWord, setSearchWord] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const PER_PAGE = 12;

  const searchImagesFunction = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await searchImages(page, searchWord);
      console.log(response);
      if (page === 1) {
        setImages(response.data.hits);
      } else {
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      }
      setShowButton(page < Math.ceil(total / PER_PAGE));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [page, searchWord]);

  const handleSearch = newSearch => {
    setSearchWord(newSearch);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      await searchImagesFunction();
    };
    fetchData();
  }, [page, searchImagesFunction]);

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      {isLoading ? (
        <Loader />
      ) : showButton ? (
        searchWord === '' ? (
          <p>Enter a term</p>
        ) : (
          <Button onClick={handleLoadMore} />
        )
      ) : (
        <p>You have reached the end of the images</p>
      )}
    </div>
  );
}

export default App;
