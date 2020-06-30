import { useState } from 'react';

const useFeature = (images) => {
  const [isFeature, setFeature] = useState([])

  function initializeFeature(array) {
    const imagesFeatured = [];
    const featureImagesInit = array.map((image) => {
      return image;
    });
    return imagesFeatured;
  }

  return {
    isFeature,
    initializeFeature,
  };
};

export default useFeature;
