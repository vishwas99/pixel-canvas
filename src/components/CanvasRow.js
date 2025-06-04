// src/components/CanvasRow.js
import React from 'react';
import PixelCell from './PixelCell';
import '../css/styles.css';

export default function CanvasRow({ rowIndex, columns, selectedColor }) {
  return (
    <div className="canvas-row">
      {Array.from({ length: columns }).map((_, colIndex) => (
        <PixelCell key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex} selectedColor={selectedColor} />
      ))}
    </div>
  );
}
