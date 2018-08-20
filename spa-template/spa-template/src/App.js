import React, { Component } from 'react';
import './app-style.css';
import { Nav } from './nav'
import { Home } from './home'

class SpaTemplate extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Home />
      </div>
    );
  }
}

export default SpaTemplate;
