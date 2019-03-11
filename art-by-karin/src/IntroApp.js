import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import CarouselApp from "./CarouselApp";

class IntroApp extends Component {
  constructor () {
    super()
    this.state = {
      introSpan: <span className="shine"><NavLink to="/CarouselApp">Artwork</NavLink></span>
    }
  }
  toggleHidden () {
    this.setState({
      introSpan: ""
    })
  }
  render() {
    return (
      <HashRouter>
        <div className="container introPage"  onClick={this.toggleHidden.bind(this)}>
        {this.state.introSpan}
          <div className="content">
            <Route path="/CarouselApp" component={CarouselApp}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default IntroApp;
