// src/components/Canvas.js
import React, { useState, useRef, useEffect } from 'react';
import CanvasRow from './CanvasRow';
import '../css/styles.css';

const INITIAL_ROWS = 80;
const INITIAL_COLUMNS = 200;
const COLUMN_INCREMENT = 50;

const Canvas = ({ selectedColor }) => {
  const [columns, setColumns] = useState(INITIAL_COLUMNS);
  const canvasRef = useRef(null);

  // Infinite scroll extension
  useEffect(() => {
    const canvas = canvasRef.current;
    const onScroll = () => {
      if (canvas.scrollLeft + canvas.clientWidth >= canvas.scrollWidth - 100) {
        setColumns(prev => prev + COLUMN_INCREMENT);
      }
    };

    canvas.addEventListener('scroll', onScroll);
    return () => canvas.removeEventListener('scroll', onScroll);
  }, []);

  // Update your pixel click handler to use selectedColor instead of a hardcoded color
  const handlePixelClick = (pixelId) => {
    // Your existing click handler logic, but use selectedColor
  };

  return (
    <div className="canvas-container" ref={canvasRef}>
        {Array.from({ length: INITIAL_ROWS }).map((_, rowIndex) => (
            <CanvasRow key={rowIndex} rowIndex={rowIndex} columns={columns} selectedColor={selectedColor} />
        ))}
    </div>

  );  
}

export default Canvas;
