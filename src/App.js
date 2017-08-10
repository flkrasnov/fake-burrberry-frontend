import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "./components/header";
import Main from "./components/main-section/main-section";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet title="Long Cotton Gabardine Car Coat | Men - Burberry" />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
