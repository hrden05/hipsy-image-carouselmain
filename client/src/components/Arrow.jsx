import React from 'react';

const Arrow = ({ direction, handleClick }) => {
  const divStyle = {
    transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`,
  };
  if (direction === 'right') {
    divStyle.right = '25px';
  } else {
    divStyle.left = '25px';
  }

  return (
    <div className="divArrow">
      {direction === 'right'
        ? (
          <img
            className="Arrow"
            src="./images/right-arrow.png"
            alt={'>'}
            style={divStyle}
            onClick={handleClick}
          />
        )
        : (
          <img
            className="Arrow"
            src="./images/left-arrow.png"
            alt={'<'}
            style={divStyle}
            onClick={handleClick}
          />
        )}
    </div>
  );
};

export default Arrow;
