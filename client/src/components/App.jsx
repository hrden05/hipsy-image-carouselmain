import React from 'react';
import FeatureImagesContainer from './FeatureImagesContainer.jsx';
import ImagesStackContainer from './ImagesStackContainer.jsx';
import Arrow from './Arrow.jsx';

import tempData from '../../dist/tempData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.setState({
      images: tempData,
    });
    console.log('tempdata', tempData);
  }

  render() {
    console.log('state', this.state);
    return (
      <div className="wrapper">
        <ImagesStackContainer images={this.state.images} />
        <FeatureImagesContainer images={this.state.images} />
        <Arrow />
      </div>
    );
  }
}
export default App;
