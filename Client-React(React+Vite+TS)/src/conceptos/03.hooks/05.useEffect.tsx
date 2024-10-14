import { useEffect, useRef, useState } from 'react';

export default function Effects() {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    document.title = 'Hola somos del info ' + count;
  }, [count]);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <p>{count}</p>
    </div>
  );
}
