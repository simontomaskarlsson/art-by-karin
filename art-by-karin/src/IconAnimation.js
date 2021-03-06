import React from 'react';

function IconAnimation(props) {
  return <img src={props.image} alt="Logo" style={iconStyle}/>;
}

const iconStyle = {
  width: '12px',
  marginLeft: '0.7rem',
};

export default IconAnimation;
