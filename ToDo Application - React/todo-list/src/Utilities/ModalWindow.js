import React from "react";
import "../Styles/ModalWindow.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalWindow = (props) => {
  return (
    <div className="modal-window-container">
      <div className="modal-window-container__section1">
        <h2 className="h2-modal">Title: </h2>
        <h2 className="h2-props-value">{props.title}</h2>
      </div>
      <div className="modal-window-container__section2">
        <h2 className="h2-modal">Description: </h2>
        <h2 className="h2-props-value">{props.description}</h2>
      </div>
      <div className="modal-window-container__section3">
        <h2 className="h2-modal">Status: </h2>
        <h2 className="h2-props-value">{props.status}</h2>
      </div>
      <AiOutlineCloseCircle className="icon-close-modal" onClick={props.onClose} />
    </div>
  );
};

export default ModalWindow;
