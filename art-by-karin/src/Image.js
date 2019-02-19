import React from 'react';

function Image(props) {
    return (
              <div className="col-sm-4">
                <img src={props.url} alt=""/>
                {console.log(props)}
             </div>
    );
  }

export default Image;