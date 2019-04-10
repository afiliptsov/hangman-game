import React, { Component } from "react";
import Hangman from "../Hangman/hangman";
import { connect } from "react-redux";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import * as actionCreator from "../../store/actions/actions";
import Modal from "react-modal";

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

  onDifficultyHandler = e => {
    this.setState({
      diff: e.target.value
    });
    console.log(this.state.diff);
  };

  startGame = (name, diff) => {
    this.props.startGame(this.state.userName);
  };

  render() {
    return (
      <div className="main-screen-bg">
        <div className="game-name-title">
          <h2>Hangman</h2>
          <br />
          <div>
            <form className="form-wrapper">
              <p className="game-name-input-title">What is your name?</p>
              <input
                type="text"
                className="game-input"
                onChange={e => this.onChangeHandler(e)}
              />
            </form>
            <form className="form-wrapper">
              <p className="game-name-input-title-diff">Difficulty level</p>
              <input
                type="text"
                className="game-input"
                onChange={e => this.onDifficultyHandler(e)}
              />
            </form>
          </div>
        </div>
        <div className="intro-center-button">
          <h1 className="intro-primary" />
          <Link to="/game">
            <a
              href="#"
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
