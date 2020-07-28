import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { id, selectFunction } = this.props;
    if (selectFunction) {
      selectFunction(id);
    }
  }

  render () {
    const { props } = this;
    const src = `https://media.giphy.com/media/${props.id}/giphy.gif`;
    return <img className="gif" src={src} alt="gif" onClick={this.handleClick} />;
  }
}

export default Gif;
