import React from "react";

const ImagePopup = ({ imageUrl, title, onClose }) => {
  return (
    <div className="image-popup-overlay" onClick={onClose}>
      <div className="image-popup">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <img src={imageUrl} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ImagePopup;
