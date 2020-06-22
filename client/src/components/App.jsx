import React from 'react';
import FeatureImagesContainer from './FeatureImagesContainer.jsx';

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
        <h1>TESTRENDER</h1>
        <FeatureImagesContainer />
      </div>
    );
  }
}
export default App;
