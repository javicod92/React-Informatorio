import { useState } from 'react';

export default function EstadosComplejos() {
  const [colors, setColors] = useState(['#008000', '#f0f000']);

  const colorsJoined = colors.join();
  const backgroundImage = `linear-gradient(${colorsJoined})`;

  return (
    <div>
      <button
        onClick={() => {
          if (colors.length < 5) {
            const newColors = [...colors];
            newColors.push('#f0f000');
            setColors(newColors);
          }
        }}
      >
        Agregar
      </button>
      <button
        onClick={() => {
          if (colors.length > 2) {
            const newColors = [...colors];
            newColors.pop();
            setColors(newColors);
          }
        }}
      >
        Eliminar
      </button>
      <div style={{ height: '150px', width: '250px', backgroundImage }} />
      {colors.map((color, index) => {
        return (
          <div>
            Color {index + 1}
            <input
              type="color"
              value={color}
              onChange={(event) => {
                const newColors = [...colors];
                newColors[index] = event.target.value;
                setColors(newColors);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
