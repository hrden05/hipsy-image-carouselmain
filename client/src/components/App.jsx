import React from 'react';
import FeatureImagesContainer from './FeatureImagesContainer.jsx';
import ImagesStack from './ImagesStack.jsx';
import Arrow from './Arrow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  render() {
    return (
      <div>
        <FeatureImagesContainer />
        <ImagesStack />
        <Arrow />
      </div>
    );
  }
}
export default App;
