import React from 'react';

const StackImage = (props) => {
  console.log('props in stackimg', props);
  return (
    <div className="StackImage">
      <img src={props.source} alt={props.product_id} />
    </div>
  );
};

export default StackImage;
