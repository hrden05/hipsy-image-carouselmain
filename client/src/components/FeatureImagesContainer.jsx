import React from 'react';
import Image from './Image.jsx';

const FeatureImagesContainer = (props) => {
  const featureImage = props.images.map((image) => {
    console.log('image', image);
    return <Image key={image.id} source={image.image_url} />;
  });

  return (
    <div className="ImagesContainer">
      {featureImage}
    </div>
  );
};

export default FeatureImagesContainer;
