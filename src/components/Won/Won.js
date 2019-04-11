import React, { Component } from "react";
import { connect } from "react-redux";

class Won extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div>I am here WON</div>;
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Won);
