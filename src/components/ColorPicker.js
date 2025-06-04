import React from 'react';

const ColorPicker = ({ onColorChange }) => {
    const colors = [
        '#000000', // Black
        '#FF0000', // Red
        '#00FF00', // Green
        '#0000FF', // Blue
        '#FFFF00', // Yellow
        '#FF00FF', // Magenta
        '#00FFFF', // Cyan
        '#FFFFFF', // White
    ];

    return (
        <div>
            <div style={styles.container}>
                {colors.map((color) => (
                    <div
                        key={color}
                        style={{
                            ...styles.colorBox,
                            backgroundColor: color,
                            border: color === '#FFFFFF' ? '1px solid #ddd' : 'none'
                        }}
                        onClick={() => onColorChange(color)}
                    />
                ))}
            </div>
            {/* Text field to enter hex color */}
            <div style={{ textAlign: 'center', padding: '10px' }}>
                <input
                    type="text"
                    placeholder="Enter hex color (e.g., #FF5733)"
                    onBlur={(e) => {
                        const hexColor = e.target.value.trim();
                        if (/^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hexColor)) {
                            onColorChange(hexColor);
                        } else {
                            alert('Invalid hex color format');
                        }
                    }}
                    style={{ marginTop: '10px', padding: '5px', width: '200px' }}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        padding: '20px',
        background: '#f5f5f5',
    },
    colorBox: {
        width: '30px',
        height: '30px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        ':hover': {
            transform: 'scale(1.1)',
        }
    }
};

export default ColorPicker;