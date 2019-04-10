import React, { Component } from "react";
import { connect } from "react-redux";
import Letters from "../Letters/Letters";
import * as actionCreator from "../../store/actions/actions";
import axios from "axios";

class Game extends Component {
  constructor() {
    super();
  }

  render() {
    console.log("PROPS came here", this.props);
    const { guessedWordArr } = this.props.wordReducer;

    const mapOverWord = this.props.wordReducer.guessedWordArr.map(e => {
      return <h2>{e}</h2>;
    });

    return (
      <div className="main-screen-bg">
        <button onClick={this.justTest}>Click me</button>
        <div className="guessedWordWrapper">
          <p>Test</p>
          <div className="guessedWordStyle">{mapOverWord}</div>
        </div>
        <Letters pushLetter={letter => this.props.pushLetter(letter)} />
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
  pushLetter: actionCreator.pushLetter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
