import React, { Component } from 'react';
import { Header, Form, Input, Button } from './styledSearchBar';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
    };
  }
  handleInputChange = event => {
    const searchWord = event.target.value;
    this.setState({ searchWord });
    console.log(searchWord);
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchWord);
    this.setState({ searchWord: '' });
  };
  render() {
    const { searchWord } = this.state;
    return (
      <Header>
        <Form id="search-form" onSubmit={this.handleSubmit}>
          <Input
            id="search-input"
            type="text"
            name="searchQuery"
            autoComplete="off"
            placeholder="Search images..."
            value={searchWord}
            onChange={this.handleInputChange}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Header>
    );
  }
}
export default Searchbar;
