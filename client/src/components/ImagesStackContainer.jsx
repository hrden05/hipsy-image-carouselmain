import React, { useState, useEffect } from 'react';
import StackImage from './StackImage.jsx';

const ImagesStackContainer = (props) => {
  // const [state, setState] = useState({
  //   feature: 0,
  //   activeIndex: props.activeIndex,
  // });
  // const { feature, activeIndex } = state;
  // useEffect(() => {
  //   setState({
  //     feature: currentFeature,
  //   });
  // }, [currentFeature]);

  // if (feature !== 0) {
  //   feature.style = {
  //     border: '2px solid black',
  //   };
  // }

  const stackItem = props.images.map((image, index) => {
    return (
      <StackImage
        key={image.id}
        source={image.image_url}
        activeIndex={props.activeIndex}
        imageIndex={index}
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
