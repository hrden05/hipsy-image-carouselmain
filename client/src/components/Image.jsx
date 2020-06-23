import React from 'react';

class Image extends React.Component {
  constructor() {
    super();
  }

  render() {
    const divStyle = {
      backgroundImage: `url(${this.props.source})`,
      alt: `${this.props.product_id}`,
      border: '1px solid white',
      borderRadius: '4px',
    };
    return (
      <div className="Image">
        <div style={divStyle} className="Image" />
      </div>
    );
  }
}

export default Image;
