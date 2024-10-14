/*
  Crear un componente que tenga 2 partes
  1. Un listado de compras por hacer
  2. Un formulario donde puedo agregar items a esa lista
*/

import { ChangeEvent, FormEvent, useState } from 'react';

export default function ListaDeCompras() {
  const [item, setItem] = useState('');
  const [list, setList] = useState<Array<string>>([]);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newList = [...list];
    newList.push(item);
    setList(newList);
    setItem('');
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setItem(event.target.value);
  }

  return (
    <div>
      <ul>
        {list.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item"></label>
        <input id="item" type="text" value={item} onChange={handleChange} />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}
