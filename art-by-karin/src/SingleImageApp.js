import React, { Component } from "react";

class SingleImageApp extends Component {
  render() {
    var imageUrl = this.props.location.pathname;
    imageUrl = "/static/media/" + imageUrl.split("/").slice(-1)[0];

    return (
      <div class="container singleImageContainer">
        <img src={imageUrl}/>
        <div>
          <h3>Piece title</h3>
          <span>Description of art piece; idea, influences, receiver etc.</span>
        </div>
      </div>
    );
  }
}

export default SingleImageApp;
