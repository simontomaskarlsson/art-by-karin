import React, { Component } from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import IconAnimation from './IconAnimation.js'
import PopupButton from './PopupButton.js'

import atIcon from './icons/atIcon.png'
import emailIcon from './icons/emailIcon.png'

class HeaderMenu extends Component {
  render() {
    if (this.props.isMobile) {
      return (
        <StickyHeader
          header={
            <div className="Header_root">
              <div className="header-row-mobile">
                <a className="effect-shine name">Karin Johansson</a>
                <PopupButton className="effect-underline"/>
                <a className="effect-underline">FAQs<IconAnimation image={atIcon}/></a>
              </div>
            </div>
          }
        >
          {/*<section>
            <p>
              This section will be what the sticky header scrolls over before entering into
              sticky state. See the gif above or run the test story book to see examples.
            </p>
          </section>*/}
        </StickyHeader>
      );
    }
    else {
      return (
        <StickyHeader
          header={
            <div className="Header_root">
              <div className="header-row">
                <div>
                  <a className="effect-shine name">Karin Johansson</a>
                </div>
                <div>
                  <a><PopupButton /></a>
                  <a className="effect-underline">FAQs<IconAnimation image={atIcon}/></a>
                </div>
              </div>
            </div>
          }
        >
          {/*<section>
            <p>
              This section will be what the sticky header scrolls over before entering into
              sticky state. See the gif above or run the test story book to see examples.
            </p>
          </section>*/}
        </StickyHeader>
      );
    }
  }
}


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showPopup: false
//     };
//   }
//   togglePopup() {
//     this.setState({
//       showPopup: !this.state.showPopup
//     });
//   }
//   render() {
//     return (
//       <div className='app'>
//         <h1>hihi</h1>
//         <button onClick={this.togglePopup.bind(this)}>show popup</button>

//         {this.state.showPopup ?
//           <Popup
//             text='Close Me'
//             closePopup={this.togglePopup.bind(this)}
//           />
//           : null
//         }
//       </div>
//     );
//   }
// };



// ReactDOM.render(
//   <App />,
//   document.getElementById('content')
// );


export default HeaderMenu;
