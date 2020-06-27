import React, { useState, useEffect } from 'react';

const ModalImage = (props) => {
  return (
    <div className="imageModal">
      <img
        src={props.source}
        alt={props.product_id}
      />
    </div>
  );
};

export default ModalImage;
