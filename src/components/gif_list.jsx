import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render () {
    return (
      <div>
        <Gif />
        <Gif />
      </div>
    );
  }
}

export default GifList;