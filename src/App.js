import React, { Component } from 'react';
import './css/App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Presentation from './components/Presentation'
import Parcours from './components/Parcours'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Home />
        <Footer />
        <Presentation />
        <Parcours />
        <Skills />
        <div className="separator">
          <div className="container"></div>
        </div>
        <Portfolio />
      </div>
    )
  }
}

export default App;