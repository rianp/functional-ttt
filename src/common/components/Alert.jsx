import React from "react";
import "./Alert.css";
import PropTypes from "prop-types";

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

Alert.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export const shouldDisplayAlert = (isValidMove, gameStatus) => {
  return !isValidMove && gameStatus === "Ongoing";
};

export default Alert;
