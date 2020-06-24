import React, { useState, useEffect } from 'react';
import FeatureImagesContainer from './FeatureImagesContainer.jsx';
import ImagesStackContainer from './ImagesStackContainer.jsx';
import Arrow from './Arrow.jsx';

import tempData from '../../dist/tempData';

const App = () => {
  const getWidth = () => (window.innerWidth) * (2 / 3) - 93;
  const [images, setImages] = useState(tempData);
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });
  console.log('images in app', images);
  const { translate, transition } = state;

  return (
    <div className="wrapper">
      <ImagesStackContainer images={images} />
      <FeatureImagesContainer
        images={images}
        translate={translate}
        transition={transition}
        width={getWidth() * images.length}
      >
        <Arrow />
      </FeatureImagesContainer>
    </div>
  );
};

export default App;
