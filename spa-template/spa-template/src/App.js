import React, { Component } from 'react';
import './app-style.css';
import { Nav } from './nav'
import { Home } from './home'
import { Services } from './services'

class SpaTemplate extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Home />
        <Services />
      </div>
    );
  }
}

export default SpaTemplate;
