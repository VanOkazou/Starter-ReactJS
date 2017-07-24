// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Components
import Searchbar from './components/Searchbar';
import VideoList from './components/VideoList';

// Youtube API key
const API_KEY = 'AIzaSyBAHJamaVjQKL8kwPnwyyAo3Dh5u_Oby-o';

YTSearch({key: API_KEY, term: 'ronaldo'}, function(data){
  console.log(data);
})

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'ronaldo'}, videos => {
      this.setState({ videos });
    });
  }


  render() {
    return (
        <div className="container">
          <Searchbar />
          <VideoList videos={this.state.videos} />
        </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
