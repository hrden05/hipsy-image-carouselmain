import React, { useState, useEffect } from 'react';

const StackImage = (props) => {
  console.log('props in stackimg', props);

  console.log('feature', feature);
  console.log('whats this', typeof `${props.activeIndex}`);
  return (
    <div className="StackImage">
      <img id={props.imageIndex} src={props.source} alt={props.product_id} />
    </div>
  );
};

export default StackImage;
