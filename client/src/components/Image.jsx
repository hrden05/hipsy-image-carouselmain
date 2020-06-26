import React from 'react';

const Image = (props) => {
  const divStyle = {
    backgroundImage: `url(${props.source})`,
    alt: `${props.product_id}`,
    border: '1px solid white',
    borderRadius: '4px',
  };
  return (
    <div className="Image">
      <div style={divStyle} className="Image" />
    </div>
  );
};

export default Image;
