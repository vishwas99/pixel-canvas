// src/components/PixelCell.js
import React, { useState } from 'react';
import '../css/styles.css';

export default function PixelCell({ row, col, selectedColor }) {
  const [color, setColor] = useState(null);

  const handleClick = () => {
    setColor(prev => {
      if(prev === selectedColor) {
        return null;
      }
      return selectedColor;
    });
  };

  return (
    <div
      className="pixel-cell"
      style={{ backgroundColor: color }}
      onClick={handleClick}
      title={`Row ${row}, Col ${col}`}
    />
  );
}
