import { useState } from 'react';
/*
  Crear un contador que me permita:
    * Restar de a 10
    * Restar de a 1
    * Volver el contador a 0
    * Sumar de a 1
    * Sumar de a 10
  
  La única condición a tener en cuenta es que el contador no puede ser menor a 0 ni mayor a 100
*/

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleSubstract(num: number) {
    if (count - num >= 0) {
      setCount(count - num);
    }
  }

  function handleAdd(num: number) {
    if (count + num < 100) {
      setCount(count + num);
    }
  }

  return (
    <div>
      {count}
      <button onClick={() => handleSubstract(10)}>-10</button>
      <button onClick={() => handleSubstract(1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => handleAdd(1)}>+</button>
      <button onClick={() => handleAdd(10)}>+10</button>
    </div>
  );
}
