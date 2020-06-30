import React, { useState, useEffect } from 'react';
import StackImage from './StackImage.jsx';

const ImagesStackContainer = (props) => {
  const stackItem = props.images.map((image, index) => {
    console.log('activveindex', props.activeIndex);

    return (
      <StackImage
        key={image.id}
        source={image.image_url}
        activeIndex={props.activeIndex}
        imageIndex={index}
        handleClick={props.handleClick}
        isFeature={props.isFeature}
        setFeature={props.setFeature}
      />
    );
  });

  return (
    <div id="stack" className="ImagesStackContainer">
      {/* <div className="upDiv" /> */}
      {stackItem}
      {/* <div className="downDiv" /> */}
    </div>
  );
};

export default ImagesStackContainer;
