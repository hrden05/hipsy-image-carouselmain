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
    <div className="Arrow" style={divStyle}>
      {direction === 'right' ? <img src="../../dist/images/right-arrow" alt={'>'} /> : <img src="../../dist/images/left-arrow.png" alt={'<'} />}
    </div>
  );
};

export default Arrow;
