import React, { Component } from "react";
import HeaderMenu from './HeaderMenu.js'
import IntroApp from './IntroApp.js'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
    showPopup: false,
    width: window.innerWidth,
    };
  }
  componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    return (
      <div className="App">
        <header className="App-header">
          <HeaderMenu isMobile={isMobile}/>
        </header>
        <IntroApp />
      </div>
    );
  }
}

export default App;
