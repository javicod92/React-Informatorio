import { useState } from 'react';

export default function Elementos() {
  const [color, setColor] = useState('');
  return (
    <div>
      {/* { type: Counter, props: { color: 'red' } } */}
      {/* { type: Counter } */}
      {color ? <Counter color={color} /> : <Counter />}
      <input
        type="color"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
    </div>
  );
}

function Counter({ color }: { color?: string }) {
  const [count, setCount] = useState(0);

  return (
    <button style={{ color }} onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
