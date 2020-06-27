import React from 'react';
import Image from './Image.jsx';
import Arrow from './Arrow.jsx';

const FeatureImagesContainer = (props) => {
  const featureImage = props.images.map((image) => {
    return (
      <Image
        key={image.id}
        source={image.image_url}
        handleClick={props.handleClick}
      />
    );
  });
  const divStyle = {
    transform: `translatey(-${props.translate}px)`,
    transition: `transform ease-out ${props.transition}s`,
    maxWidth: '100%',
    height: `${props.height}px`,
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div id="view" className="ImagesContainer" style={divStyle}>
      {featureImage}
    </div>
  );
};

export default FeatureImagesContainer;
