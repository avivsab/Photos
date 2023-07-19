import React, {useState} from 'react';

const Image = ({ id, title, url, onDelete, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="image-container" onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
      <div className={`image-card ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        X
      </button>
    </div>
  );
};

export default Image;

