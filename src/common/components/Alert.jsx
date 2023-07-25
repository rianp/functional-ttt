import React from "react";
import "./Alert.css";

const Alert = ({ onClose }) => {
  return (
    <div className="alert">
      Move already made. Please choose an empty cell.
      <span className="alert-close-btn" onClick={onClose}>
        close
      </span>
    </div>
  );
};

export default Alert;
