import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import FeatureImagesContainer from './FeatureImagesContainer.jsx';
import ImagesStackContainer from './ImagesStackContainer.jsx';
import Arrow from './Arrow.jsx';

import tempData from '../../dist/tempData';

const App = () => {
  const getHeight = () => window.innerHeight * (2 / 3);
  const [images, setImages] = useState(tempData);
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  console.log('images in app', images);
  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getHeight(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (images.length - 1) * getHeight(),
        activeIndex: images.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getHeight(),
    });
  };

  return (
    <div className="wrapper">
      <ImagesStackContainer images={images} />
      <FeatureImagesContainer
        images={images}
        translate={translate}
        transition={transition}
        height={getHeight() * images.length}
      />
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
};

export default App;
