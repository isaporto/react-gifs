import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  render () {
    return <input className="form-control form-search" />;
  }
}

export default SearchBar;
