import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Body from './Body.js'
// import TimesData from './db/times.json'


class App extends Component {

  render() {
    return (
      <div className="App">
      <Header/>
      <Body />
      <Footer />
      </div>
    );
  }
}

export default App;
