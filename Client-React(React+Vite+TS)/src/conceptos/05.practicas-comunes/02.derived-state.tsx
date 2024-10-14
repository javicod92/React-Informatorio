import { useState } from 'react';

export default function Tablero() {
  const [squares, setSquares] = useState(Array(9).fill('.'));
  // derived state;
  const nextValue = calculateNextValue(squares);

  function selectSquare(index: number) {
    const newSquares = [...squares];
    newSquares[index] = nextValue;
    setSquares(newSquares);
  }

  function renderCuadrado(index: number) {
    return (
      <button onClick={() => selectSquare(index)}>{squares[index]}</button>
    );
  }

  return (
    <div>
      <div>
        {renderCuadrado(0)}
        {renderCuadrado(1)}
        {renderCuadrado(2)}
      </div>
      <div>
        {renderCuadrado(3)}
        {renderCuadrado(4)}
        {renderCuadrado(5)}
      </div>
      <div>
        {renderCuadrado(6)}
        {renderCuadrado(7)}
        {renderCuadrado(8)}
      </div>
      <button
        onClick={() => {
          setSquares(Array(9).fill('.'));
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}

function calculateNextValue(cuadrados) {
  return cuadrados.filter((item) => item !== '.').length % 2 === 0 ? 'X' : 'O';
}
