import React, {Component} from 'react';
import './App.css';
import ListContainer from './ListContainer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <ListContainer />
      </div>
    );
  }
}

export default App;
