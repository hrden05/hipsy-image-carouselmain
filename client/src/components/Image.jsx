import React from 'react';

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      poenis: [],
    };
  }

  render() {
    return (
      <div className="Image">
        <img src={this.props.source} alt={this.props.product_id} />
      </div>
    );
  }
}

export default Image;
