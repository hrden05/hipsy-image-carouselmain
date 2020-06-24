import React from 'react';
// import leftArrow from '../../dist/images/left-arrow.svg';
// import rightArrow from '../../dist/images/right-arrow.svg';

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
      {direction === 'right' ? <img src={rightArrow} alt={'>'} /> : <img src={leftArrow} alt={'<'} />}
    </div>
  );
};

export default Arrow;
