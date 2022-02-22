import { Component } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';



class App extends Component {
  state = {
    query: ""
  }
  changeQuery = ({ query }) => {
    this.setState({ query })
  }


  render() {

    return (
      <div className="App">
        <SearchBar onSubmit={this.changeQuery} />
        <ImageGallery queryProp={this.state.query} />
      </div>
    );
  }
}

export default App;
