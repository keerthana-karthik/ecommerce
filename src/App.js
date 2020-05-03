import React, { Component } from "react";
import logo from "./logo.svg";
import appclasses from "./App.css";
import HomeComponent from "./components/Home/HomeComponent";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/react-basics">
        <div className={appclasses.App}>
          
          <HomeComponent></HomeComponent>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
