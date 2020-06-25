import React from 'react';
import Image from './Image.jsx';

const FeatureImagesContainer = (props) => {
  const featureImage = props.images.map((image) => {
    return <Image key={image.id} source={image.image_url} />;
  });
  const divStyle = {
    transform: `translateX(-${props.translate}px)`,
    transition: `transform ease-out ${props.transition}s`,
    maxHeight: '100%',
    width: `${props.width}px`,
    display: 'flex',
  };

  return (
    <div className="ImagesContainer" style={divStyle}>
      {featureImage}
    </div>
  );
};

export default FeatureImagesContainer;

{/* <Carousel showArrows={true} showThumbs={true}>
{
    images.map((url, index) => (
       <img key={index} src={url} />
    ))
}
</Carousel> */}
