import React, { Component } from "react";
import Hangman from "../Hangman/hangman";
import { connect } from "react-redux";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import * as actionCreator from "../../store/actions/actions";
import ReactDOM from "react-dom";
import "rc-slider/assets/index.css";
import Slider, { Range } from "rc-slider";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      diff: 0
    };
  }

  onChangeHandler = e => {
    this.setState({
      userName: e.target.value
    });
    console.log(this.props);
  };
  submitHandler(e) {
    e.preventDefault();
  }

  onDifficultyHandler = value => {
    this.setState({
      diff: value / 10
    });
    console.log(value);
  };

  startGame = (name, diff) => {
    this.props.startGame(this.state.userName, this.state.diff);
  };

  render() {
    return (
      <div className="main-screen-bg">
        {console.log(this.state.diff)}
        <div className="game-name-title">
          <h2>Hangman</h2>
          <br />
          <div>
            <form onSubmit={this.submitHandler} className="form-wrapper">
              <p className="game-name-input-title">What is your name?</p>
              <input
                type="text"
                className="game-input"
                onChange={e => this.onChangeHandler(e)}
              />
              <p className="game-name-input-title-diff">Difficulty level</p>
              <div style={{ marginTop: "25px" }}>
                <Slider
                  onChange={this.onDifficultyHandler}
                  min={1}
                  defaultValue={1}
                  marks={{
                    10: 1,
                    20: 2,
                    30: 3,
                    40: 4,
                    50: 5,
                    60: 6,
                    70: 7,
                    80: 8,
                    90: 9,
                    100: 10
                  }}
                  step={null}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="intro-center-button">
          <h1 className="intro-primary" />
          <Link to="/game">
            <a
              href=""
              onClick={(name, diff) =>
                this.startGame(this.state.userName, this.state.diff)
              }
              className="btn btn-white btn-animated"
            >
              Start
            </a>
          </Link>
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
  startGame: actionCreator.getWordLength
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
