import { useState } from 'react';

const useFeature = (images) => {
  const [isFeature, setFeature] = useState([
    for (var i = 0; i < images.length; i += 1) {
      
    }
  ]);

  function initializeFeature(array) {
    const imagesFeatured = [];
    const featureImagesInit = array.map((image) => {
      return image;
    });
    featureImagesInit.forEach((image, index) => {
      (index === 0)
        ? setFeature([{ featureImagesInit[index]: true }])
        : setFeature([{ featureImagesInit[index]: false }])

    });
    return imagesFeatured;
  }

  return {
    isFeature,
    initializeFeature,
  };
};

export default useFeature;
