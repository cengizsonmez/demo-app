import React, { useState } from "react";
import "./styles.css";

interface ItemProps {
  title: string;
  imageUrl?: string;
}

const Item: React.FC<ItemProps> = ({ title, imageUrl }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <div className="card">
      <div className="img-wrapper">
        {imageUrl &&
          (!imageError ? (
            <img
              src={imageUrl}
              alt={title}
              className="img"
              onError={handleImageError}
            />
          ) : (
            <div className="placeholder">No Image</div>
          ))}
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Item;
