import React from 'react';
import Image from './Image.jsx';

class FeatureImagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peony: []
    };
  }

  render() {
    return (
      <div id="ImagesContainer">
        <h1>Another Test</h1>
        <Image />
      </div>
    );
  }
}

export default FeatureImagesContainer;
