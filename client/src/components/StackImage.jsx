import React, { useState, useEffect } from 'react';

const StackImage = (props) => {
  // const [isFeature, setFeature] = useState([]);
  console.log('stackimageprops', props);
  const divStyle = { opacity: "50%" };
  const divHighlight = { opacity: "100%" };

  return (
    <div>
      <div className="StackImage">
        {(props.isFeature === true)
          ? (
            <div className="highlightWrapper">
              <img
                id={props.imageIndex}
                src={props.source}
                alt={props.product_id}
                onClick={props.handleClick}
                style={divHighlight}
              />
            </div>
          )
          : (
            <img
              id={props.imageIndex}
              src={props.source}
              alt={props.product_id}
              onClick={props.handleClick}
              style={divStyle}
            />
          )}
      </div>
    </div>
  );
};

export default StackImage;
