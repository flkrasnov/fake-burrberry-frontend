import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "./components/header";
import Main from "./components/main-section/main-section";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          title="Long Cotton Gabardine Car Coat | Men - Burberry"
          meta={[
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0"
            },
            { name: "description", content: "Welcome to burberry.com" },
            { "http-equiv": "X-UA-Compatible", content: "IE=Edge" },
            { charset: "UTF-8" }
          ]}
          link={[
            { rel: "shortcut icon", href: "%PUBLIC_URL%/favicon.ico" },
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css?family=Lora:400,400i&amp;subset=cyrillic"
            },
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css?family=Raleway:400,500,600,700"
            },
            { rel: "manifest", href: "%PUBLIC_URL%/manifest.json" }
          ]}
        />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
