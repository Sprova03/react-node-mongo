import React from "react";

import "./Avatar.css";

const Avatar = ({ ppt }) => {
  return (
    <div className={`avatar ${ppt.className}`} style={ppt.style}>
      <img
        src={ppt.image}
        alt={ppt.alt}
        style={{ width: ppt.width, height: ppt.width }}
      />
    </div>
  );
};

export default Avatar;
