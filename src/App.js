import React, { Component } from "react";
import "./App.css";
import Letters from "./components/Letters/Letters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Letters />
        <header className="App-header" />
      </div>
    );
  }
}

export default App;
