import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeatureImagesContainer from './FeatureImagesContainer.jsx';
import StackContainer from './ImagesStackContainer.jsx';
import Arrow from './Arrow.jsx';
import * as svg from './SvgFiles.jsx';
import ModalHeart from './ModalHeart.jsx';
import ModalImagesContainer from './ModalImagesContainer.jsx';
import useModalHeart from './useModalHeart.jsx';
import useModalImage from './useModalImage.jsx';
import useFeature from './useFeature.jsx';

const App = () => {
  const { isFeature, initializeFeature } = useFeature();
  const { isHeartShowing, toggleHeart } = useModalHeart();
  const { isImageShowing, toggleImage } = useModalImage();
  const getHeight = () => window.innerHeight * (2 / 3);
  const [images, setImages] = useState([]);
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.2,
  });
  console.log('isfeature', isFeature);
  const {
    translate,
    transition,
    activeIndex,
    activeUrl,
  } = state;

  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
        activeUrl: images[activeIndex].image_url,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getHeight(),
      activeUrl: images[activeIndex + 1].image_url,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (images.length - 1) * getHeight(),
        activeIndex: images.length - 1,
        activeUrl: images[activeIndex - 1].image_url,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getHeight(),
      activeUrl: images[activeIndex - 1].image_url,
    });
  };

  const positiveSlide = (number) => {
    setState({
      ...state,
      activeIndex: (activeIndex + number),
      translate: ((activeIndex + number) * getHeight()),
      activeUrl: images[activeIndex + number].image_url,
    });
  };

  const negativeSlide = (number) => {
    setState({
      ...state,
      activeIndex: activeIndex - number,
      translate: (activeIndex - number) * getHeight(),
      activeUrl: images[activeIndex - number].image_url,
    });
  };
  const changeIndex = (event) => {
    const targetIndex = event.target.id;
    const transtlateNumber = targetIndex - activeIndex;
    return (transtlateNumber < 0)
      ? negativeSlide(Math.abs(transtlateNumber))
      : positiveSlide(transtlateNumber);
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const prodId = getRandomInt(1, 101);
    const getImages = () => {
      axios.get(`/api/images/${prodId}`)
        .then((response) => {
          const gotImages = response.data[0];
          console.log('response', gotImages);
          // const featureImages = gotImages.map((imageFeature, index) => {
          //   return imageFeature;
          // });
          // for (var i = 0; i < featureImages.length; i += 1) {
          //   if (i === 0) {
          //     setFeature({ featureImages[0]: true})
          //   } else {
          //     setFeature({ featureImages[i]: false})
          //   }
          // };
          setImages(gotImages);
          setIsLoading(false);
          setState({
            ...state,
            activeUrl: gotImages[0].image_url,
          });
          // setFeature(() => {
          //   isFeature: gotImages.map
          // });
          // gotImages.map((image, index) => {
          //   if (index === 0) setFeature();
          //   // else if (index === activeIndex) setFeature(true);
          //   console.log('imageinapp', image);
          //   console.log('isfeature', image.isFeature);
          // });
        })
        .catch((error) => console.error(error));
    };
    getImages();
  }, []);

  return (isLoading) ? <h1>Loading!</h1> : (
    <div className="wrapper">
      <StackContainer
        handleClick={changeIndex}
        activeIndex={activeIndex}
        images={images}
        isFeature={isFeature}
      />
      <FeatureImagesContainer
        images={images}
        translate={translate}
        transition={transition}
        height={getHeight() * images.length}
        handleClick={toggleImage}
      />
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <div className="heart" onClick={toggleHeart}>
        {svg.heart}
      </div>
      <ModalHeart
        isHeartShowing={isHeartShowing}
        hide={toggleHeart}
      />
      <ModalImagesContainer
        images={images}
        isImageShowing={isImageShowing}
        hide={toggleImage}
        activeUrl={activeUrl}
      />
    </div>
  );
};

export default App;
