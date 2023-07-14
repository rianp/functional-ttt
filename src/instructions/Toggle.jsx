import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Toggle({ children }) {
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

Toggle.propTypes = {
  children: PropTypes.node.isRequired,
};
