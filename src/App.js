import React, { Component } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import Bar from "./components/headerBar/HeaderBar";
import Carousel from "./components/carousel/carousel";
import About from "./components/about/about";

class App extends Component {
  constructor(props) {
    super(props);
  }

  HideOnClick = () => {
    console.log("text");
  };

  render() {
    return (
      <div className="App">
        <Bar />

        <Menu />

        <Carousel />
        <About />
      </div>
    );
  }
}

export default App;
