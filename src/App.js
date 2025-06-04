import { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

function App() {
  const [selectedColor, setSelectedColor] = useState('#000000');

  return (
    <div className="App">
      <header style={{padding: '20px', textAlign: 'center', background: '#a31ce2', color: '#fff', fontSize: '24px', fontFamily: 'Arial, sans-serif'}}>
        Pixel Canvas
      </header>
      <ColorPicker onColorChange={setSelectedColor} />
      <div className="canvas-container">
        <div id="canvas">
          <div className="pixel-grid">
            <Canvas selectedColor={selectedColor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
