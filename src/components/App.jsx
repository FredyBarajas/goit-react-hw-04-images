import React, { Component } from 'react';
import { searchImages, total } from 'petition';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    searchWord: 'casa',
    page: 1,
    per_page: 12,
    total: total,
    images: [],
    showButton: false,
    isLoading: false,
  };

  searchImages = async () => {
    this.setState({ isLoading: true });
    let { page, per_page, searchWord } = this.state;
    try {
      const response = await searchImages(page, per_page, searchWord);
      console.log(response);
      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        total: total,
        showButton: this.state.page < Math.ceil(total / 12),
      }));
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000);
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  handleSearch = newSearch => {
    this.setState({ searchWord: newSearch, page: 1, images: [] }, () => {
      this.searchImages();
    });
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.searchImages();
      }
    );
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          this.state.showButton && <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
