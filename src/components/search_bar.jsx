import React, { Component } from 'react';

class SearchBar extends Component {
  handleInput = (event) => {
    const { props } = this;
    props.searchFunction(event.target.value);
  }

  render () {
    return <input className="form-control form-search" onInput={this.handleInput} />;
  }
}

export default SearchBar;
