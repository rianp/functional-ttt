import React, { useState } from "react";
import PropTypes from "prop-types";

export default function InstructionsButton({ children }) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <button className="button" onClick={toggleContent}>
        Instructions
      </button>
      {showContent && children}
    </div>
  );
}

InstructionsButton.propTypes = {
  children: PropTypes.node.isRequired,
};
