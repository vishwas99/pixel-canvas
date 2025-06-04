// src/components/Canvas.js
import React, { useState, useRef, useEffect } from 'react';
import CanvasRow from './CanvasRow';
import '../css/styles.css';

const INITIAL_ROWS = 80;
const INITIAL_COLUMNS = 200;
const COLUMN_INCREMENT = 50;

export default function Canvas() {
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

  return (
    <div className="canvas-container" ref={canvasRef}>
        {Array.from({ length: INITIAL_ROWS }).map((_, rowIndex) => (
            <CanvasRow key={rowIndex} rowIndex={rowIndex} columns={columns} />
        ))}
    </div>

  );  
}
