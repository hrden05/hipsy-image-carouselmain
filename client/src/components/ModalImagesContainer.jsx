import React from 'react';
import ReactDOM from 'react-dom';
import { xOut } from './SvgFiles.jsx';
import ModalImage from './ModalImage.jsx';

const ModalImagesContainer = (props) => {
  return (
    props.isImageShowing ? ReactDOM.createPortal(
      <>
        <div className="modalImagesOverlay" />
        <div className="modalImagesWrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className="modalImages">
            <div className="modalImagesHeader">
              <div className="modalImagesCloseButton" data-dismiss="modal" aria-label="Close" onClick={props.hide}>
                {xOut}
                <span aria-hidden="true" />
              </div>
            </div>
            <ModalImage source={props.activeUrl} />
          </div>
        </div>
      </>, document.body,
    ) : null);
};

export default ModalImagesContainer;
