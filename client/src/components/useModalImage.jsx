import { useState } from 'react';

const useModalImage = () => {
  const [isImageShowing, setIsImageShowing] = useState(false);

  function toggleImage() {
    setIsImageShowing(!isImageShowing);
  }

  return {
    isImageShowing,
    toggleImage,
  };
};

export default useModalImage;
