import React, { Component } from 'react';
import Header from './components/header';
import Product from './components/main-section/product/product';
import Accordion from './components/main-section/accordion/accordion';
import Recomendations from './components/main-section/recomendations/recomendations';
import Links from './components/main-section/links/links';
import Footer from './components/footer'
import './App.css';

class App extends Component {
  render() {
    return (

      <div>

        <Header />

        <main>

          <Product />
          <Accordion />
          <Recomendations />
          <Links />

        </main>

        <Footer />

      </div>
    );
  }
}


export default App;
