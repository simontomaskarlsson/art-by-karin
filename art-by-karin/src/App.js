import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import CarouselApp from "./CarouselApp";
import SingleImageApp from "./SingleImageApp";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <li><NavLink to="/CarouselApp">CarouselApp</NavLink></li>
          <li><NavLink to="/SingleImageApp">SingleImageApp</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/CarouselApp" component={CarouselApp}/>
            <Route path="/SingleImageApp" component={SingleImageApp}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
