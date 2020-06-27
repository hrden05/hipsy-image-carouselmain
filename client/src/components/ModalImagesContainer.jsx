import React from 'react';
import ReactDOM from 'react-dom';
import { xOut } from './SvgFiles.jsx';
import ModalImage from './ModalImage.jsx';

const ModalImagesContainer = (props) => {
  const imageModal = props.images.map((image) => {
    return (
      <ModalImage
        key={image.id}
        source={image.image_url}
      />
    );
  });
  return (
    props.isImageShowing ? ReactDOM.createPortal(
      <>
        <div className="modalImagesOverlay" />
        <div className="modalImagesWrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className="modalImages">
            <div className="modalImaagesHeader">
              <div className="modalImagesCloseButton" data-dismiss="modal" aria-label="Close" onClick={props.hide}>
                {xOut}
                <span aria-hidden="true" />
              </div>
            </div>
            {imageModal}
          </div>
        </div>
      </>, document.body,
    ) : null);
};

export default ModalImagesContainer;
