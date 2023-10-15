import React, { useState, useEffect, useCallback } from 'react';
import { searchImages, total } from 'PixabayApi';
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

  const searchImagesFunction = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await searchImages(page, per_page, searchWord);
      console.log(response);
      if (page === 1) {
        setImages(response.data.hits);
      } else {
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      }
      setShowButton(page < Math.ceil(total / per_page));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [page, searchWord, per_page]);

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
        <Button onClick={handleLoadMore} />
      ) : (
        <p>Enter a search term</p>
      )}
    </div>
  );
}

export default App;
