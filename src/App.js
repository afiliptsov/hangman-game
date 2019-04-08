import React, { Component } from "react";
import "./App.css";
import Letters from "./components/Letters/Letters";
import { connect } from "react-redux";
import axios from "axios";
import * as actionCreator from "./store/actions/actions";

import wordActions from "./store/reducers/wordReducer";

console.log(wordActions, "wordActions");

class App extends Component {
  componentDidMount() {
    this.props.getLength();
  }

  render() {
    {
      console.log("PROPS came here", this.props);
    }
    return (
      <div>
        {("Redux", console.log(this.props))}
        <div className="App">
          <Letters />
          <header className="App-header" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = {
  getLength: actionCreator.getWordLength
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
