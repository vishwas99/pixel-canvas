// src/components/PixelCell.js
import React, { useState } from 'react';
import '../css/styles.css'; // Assuming you have a CSS file for styling

export default function PixelCell({ row, col }) {
  const [color, setColor] = useState(null);

  const handleClick = () => {
    setColor(prev => (prev ? null : '#4444ff'));
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
