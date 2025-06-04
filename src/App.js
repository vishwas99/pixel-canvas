
import './App.css';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="App">
      <header style={{padding: '20px', textAlign: 'center', background: '#a31ce2', color: '#fff', fontSize: '24px', fontFamily: 'Arial, sans-serif'}}>
        Pixel Canvas
      </header>
      <div className="canvas-container">
        <div id="canvas">
          <div className="pixel-grid">
            <Canvas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
