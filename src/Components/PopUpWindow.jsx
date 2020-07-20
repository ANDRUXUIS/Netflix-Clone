import React from "react";
import Youtube from "react-youtube";
import Modal from "react-bootstrap/Modal";

function PopUpWindow({ show, onHide, opts, trailer }) {
  return (
    <div>
      <Modal show={show} onHide={onHide} centered size="xl">
        <Modal.Body className="PopUp__Trailer">
          <Youtube videoId={trailer} opts={opts} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PopUpWindow;
