import React from 'react';
import StackImage from './StackImage.jsx';

class ImagesStackContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      corn: [],
    };
  }

  render() {
    const stackItem = this.props.images.map((image) => {
      console.log('stackimage', image);
      return <StackImage key={image.id} source={image.image_url} />;
    });
    return (
      <div className="ImagesStackContainer">
        <h1>ImagesStackContainer</h1>
        {stackItem}
      </div>
    );
  }
}

export default ImagesStackContainer;
