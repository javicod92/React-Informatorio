import { ChangeEvent, Dispatch, FormEvent, useState } from 'react';

export default function ListaDeCompras() {
  const [list, setList] = useState<Array<string>>([]);
  return (
    <div>
      <List list={list} />
      <Form list={list} setList={setList} />
    </div>
  );
}

type FormProps = {
  list: Array<string>;
  setList: Dispatch<React.SetStateAction<string[]>>;
};
function Form({ list, setList }: FormProps) {
  const [item, setItem] = useState('');
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="item"></label>
      <input id="item" type="text" value={item} onChange={handleChange} />
      <button type="submit">Agregar</button>
    </form>
  );
}

type ListProps = {
  list: Array<string>;
};
function List({ list }: ListProps) {
  return (
    <ul>
      {list.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
}
