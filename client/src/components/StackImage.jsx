import React, { useState, useEffect } from 'react';

const StackImage = (props) => {
  console.log('props in stackimg', props);
  return (
    <div className="StackImage">
      <img
        id={props.imageIndex}
        src={props.source}
        alt={props.product_id}
        onClick={props.handleClick}
      />
    </div>
  );
};

export default StackImage;
