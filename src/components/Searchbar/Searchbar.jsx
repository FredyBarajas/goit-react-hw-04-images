import React, { useState } from 'react';
import { Header, Form, Input, Button } from './styledSearchBar';

function Searchbar({ onSubmit }) {
  const [searchWord, setSearchWord] = useState('');

  const handleInputChange = event => {
    const searchWord = event.target.value;
    setSearchWord(searchWord);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchWord);
  };

  return (
    <Header>
      <Form id="search-form" onSubmit={handleSubmit}>
        <Input
          id="search-input"
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Search images..."
          value={searchWord}
          onChange={handleInputChange}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Header>
  );
}

export default Searchbar;
