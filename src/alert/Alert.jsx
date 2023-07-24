import React from "react";
import "./Alert.css";

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert">
      {message}
      <span className="alert-close-btn" onClick={onClose}>
        close
      </span>
    </div>
  );
};

export default Alert;
