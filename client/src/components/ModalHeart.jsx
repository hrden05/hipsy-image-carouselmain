import React from 'react';
import ReactDOM from 'react-dom';
import { xOut } from './SvgFiles.jsx';

const ModalHeart = ({ isHeartShowing, hide }) => (
  isHeartShowing ? ReactDOM.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <div className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              {xOut}
              <span aria-hidden="true" />
            </div>
          </div>
          <p>
            Hello modo
          </p>
        </div>
      </div>
    </>, document.body,
  ) : null);

export default ModalHeart;
