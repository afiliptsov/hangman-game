import React, { Component } from "react";
import { connect } from "react-redux";
import happyFace from "../../assets/hangman-images/happyFace.svg";

class Won extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>I am here WON</div>
        <img src={happyFace} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Won);
