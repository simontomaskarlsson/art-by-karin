import React, { Component } from "react";

class SingleImageApp extends Component {
  constructor() {
    super()
    this.state = {
      image: ""
    }
  }
  render() {
    // const { image, match: { params } } = this.props;
    const { match: { params } } = this.props;
    return (
      <div>
        <h2>Rubrik</h2>
        <div>
        {this.image}
        </div>
      </div>
    );
  }
}

export default SingleImageApp;
