import React from 'react';

function Image(props) {
    return (
              <div className="col-sm-4">
                <img src={props.url} alt="" style={imageStyle}/>
                {console.log(props)}
             </div>
    );
  }

const imageStyle = {
  width: '40rem',
  padding: '4rem'
};

export default Image;
