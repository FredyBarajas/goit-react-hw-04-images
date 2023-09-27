import React, { useState, useEffect } from 'react';
import { searchImages, total } from 'PixabayApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

// ...

function App() {
  const [searchWord, setSearchWord] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchImagesFunction = async () => {
    setIsLoading(true);
    try {
      const response = await searchImages(page, searchWord);
      console.log(response);
      if (page === 1) {
        setImages(response.data.hits);
      } else {
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      }
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
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // eslint-disable-next-line
  useEffect(() => {
    searchImagesFunction();
  }, [page, searchWord, searchImagesFunction]);

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      {searchWord !== '' && <ImageGallery images={images} />}
      {isLoading ? (
        <Loader />
      ) : showButton ? (
        <Button onClick={handleLoadMore} />
      ) : (
        searchWord === '' && <p>Enter a search term</p>
      )}
    </div>
  );
}

export default App;
