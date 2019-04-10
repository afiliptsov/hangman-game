import React, { Component } from "react";
import { connect } from "react-redux";

class Summary extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div>I am here</div>;
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Summary);
