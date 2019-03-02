import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import IconAnimation from './IconAnimation.js'

import './HeaderTextHover.css'

import atIcon from './icons/atIcon.png'
import emailIcon from './icons/emailIcon.png'

const HeaderMenu = () => (
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <div className="Header_root">
        <div className="row">
          <div className="col-xs-6 wrapper">
            <a class="effect-shine name">Karin Johansson</a>
          </div>
          <div className="col-xs-2 wrapper">
            {/*Empty*/}
          </div>
          <div className="col-xs-2 wrapper">
            <a class="effect-underline">Contact<IconAnimation image={emailIcon} /></a>
          </div>
          <div className="col-xs-2 wrapper">
            <a class="effect-underline">FAQs<IconAnimation image={atIcon} /></a>
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

export default HeaderMenu;
