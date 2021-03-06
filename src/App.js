import React, { Component } from 'react';
import './assets/css/default.css';

import Header from './components/header/index'
import Home from './components/home/index'
import Footer from './components/footer/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
