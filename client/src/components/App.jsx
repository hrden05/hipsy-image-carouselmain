import React, { useState, useEffect } from 'react';
import FeatureImagesContainer from './FeatureImagesContainer.jsx';
import StackContainer from './ImagesStackContainer.jsx';
import Arrow from './Arrow.jsx';

import tempData from '../../dist/tempData';

const App = () => {
  const getHeight = () => window.innerHeight * (2 / 3);
  const [images, setImages] = useState(tempData);
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.2,
  });

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

  const positiveSlide = (number) => {
    setState({
      ...state,
      activeIndex: (activeIndex + number),
      translate: ((activeIndex + number) * getHeight()),
    });
  };

  const negativeSlide = (number) => {
    setState({
      ...state,
      activeIndex: activeIndex - number,
      translate: (activeIndex - number) * getHeight(),
    });
  };
  const changeIndex = (event) => {
    const targetIndex = event.target.id;
    const transtlateNumber = targetIndex - activeIndex;
    return (transtlateNumber < 0)
      ? negativeSlide(Math.abs(transtlateNumber))
      : positiveSlide(transtlateNumber);
  };
  return (
    <div className="wrapper">
      <StackContainer
        handleClick={changeIndex}
        activeIndex={activeIndex}
        images={images}
      />
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
