import { useState } from 'react';

const useModalHeart = () => {
  const [isHeartShowing, setIsHeartShowing] = useState(false);

  function toggleHeart() {
    setIsHeartShowing(!isHeartShowing);
  }

  return {
    isHeartShowing,
    toggleHeart,
  };
};

export default useModalHeart;
