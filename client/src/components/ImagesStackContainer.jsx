import React, { useState, useEffect } from 'react';
import StackImage from './StackImage.jsx';
// import useFeature from './useFeature.jsx';

const ImagesStackContainer = (props) => {
  // const [isFeature, setFeature] = useState([]);
  const stackItem = props.images.map((image, index) => {
    // if (index === 0) {
    //   setFeature({ isFeature: true });
    // } else {
    //   setFeature({ isTrue: false });
    // }

    // useEffect(() => {
    //   setFeature({ isFeature: true });
    //   console.log('index, activeindex', typeof index, typeof props.activeIndex);
    // }, [props.activeIndex]);
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
      {/* <div className="upDiv" /> */}
      {stackItem}
      {/* <div className="downDiv" /> */}
    </div>
  );
};

export default ImagesStackContainer;
