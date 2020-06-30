import React, { useState, useEffect } from 'react';
import StackImage from './StackImage.jsx';

const ImagesStackContainer = (props) => {
  const stackItem = props.images.map((image, index) => {
    return (
      <StackImage
        key={image.id}
        source={image.image_url}
        activeIndex={props.activeIndex}
        imageIndex={index}
        handleClick={props.handleClick}
        isFeature={props.isFeature}
        images={props.images}
      />
    );
  });

  return (
    <div id="stack" className="ImagesStackContainer">
      {stackItem}
    </div>
  );
};

export default ImagesStackContainer;
