
import './App.css';

// this is change in master branch
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
