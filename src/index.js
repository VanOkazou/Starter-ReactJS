// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Components
import Searchbar from './components/Searchbar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import '../style/style.css';

// Youtube API key
const API_KEY = 'AIzaSyBAHJamaVjQKL8kwPnwyyAo3Dh5u_Oby-o';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null,
      indexCurrentVideo: 0,
      query: ''
    };

    this.newSearch('React JS');
  }

  changeVideo = video => {
    const currentVideo = video;
    this.setState({currentVideo});
  }

  changeIndexCurrentVideo = indexCurrentVideo => {
    this.setState({indexCurrentVideo});
  }

  newSearch = query => {
    YTSearch({key: API_KEY, term: query}, videos => {
      const currentVideo = videos[0];
      this.setState({ videos, currentVideo });
    });
  }

  render() {
    const newSearch = _.debounce((query) => { this.newSearch(query) }, 300);
    return (
      <div className="wrapper">
        <header>
          <div className="container">
            <h1>
              MyYoutube
              <small>with ReactJS</small>
            </h1>
            <Searchbar
              query={this.state.query}
              newSearch={newSearch}
            />
          </div>
        </header>
        <div className="content">
          <div className="container">
            <div className="row">
              <VideoDetail video={this.state.currentVideo} />
              <VideoList
                videos={this.state.videos}
                changeVideo={this.changeVideo}
                indexCurrentVideo={this.state.indexCurrentVideo}
                changeIndexCurrentVideo={this.changeIndexCurrentVideo}
              />
            </div>
          </div>
        </div>
        <footer>
          Made by Van PHAN | reBorn
        </footer>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
