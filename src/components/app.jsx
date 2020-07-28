import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifSelected: "",
      gifs: [],
    };
  }

  search = (query) => {
    giphy('XlFhDMvF6Sgwc3i02EVR8oXJKe2r4dwT').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data,
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      gifSelected: id,
    });
  }

  render = () => {
    const { state } = this;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            {state.gifSelected ? <Gif id={state.gifSelected} /> : null }
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            {
              state.gifs.map((gif) => {
                return <Gif id={gif.id} key={gif.id} selectFunction={this.selectGif} />;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
