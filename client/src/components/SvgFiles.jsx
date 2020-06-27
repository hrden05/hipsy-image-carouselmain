import React from 'react';

const heart = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
    <path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" />
  </svg>
);

const heartFilled = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
    <path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" />
  </svg>
);

const rightArroww = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z" />
  </svg>
);

const leftArroww = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z" />
  </svg>
);

const xOut = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
    <path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z" />
  </svg>

);

const check = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
    <path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z" />
  </svg>
);

const expand = (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="24" fill="#FFF" />
    <path d="M27.0002 15C26.4472 15 26.0002 15.447 26.0002 16C26.0002 16.553 26.4472 17 27.0002 17H29.5863L25.2932 21.293C24.9022 21.684 24.9022 22.316 25.2932 22.707C25.4882 22.902 25.7442 23 26.0002 23C26.2562 23 26.5122 22.902 26.7072 22.707L31.0002 18.414V21C31.0002 21.553 31.4472 22 32.0002 22C32.5532 22 33.0002 21.553 33.0002 21V15H27.0002Z" fill="#222222"/>
    <path d="M21.293 25.2932L17 29.5863V27.0002C17 26.4472 16.553 26.0002 16 26.0002C15.447 26.0002 15 26.4472 15 27.0002V33.0002H21C21.553 33.0002 22 32.5532 22 32.0002C22 31.4472 21.553 31.0002 21 31.0002H18.414L22.707 26.7072C23.098 26.3162 23.098 25.6842 22.707 25.2932C22.316 24.9022 21.684 24.9022 21.293 25.2932Z" fill="#222222"/>
  </svg>
);

export {
  heart,
  heartFilled,
  leftArroww,
  rightArroww,
  xOut,
  check,
  expand,
};
