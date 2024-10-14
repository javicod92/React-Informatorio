/*
  Dentro del componente Item completar lo que falta.

  Si isDone === true, entonces mostrar la tarea tachada y al lado ✅

  Si isDone === false, entonces mostrar la tarea sin tachar y al lado ❌
  
  Para mostrar tachado usar el tag <del>
*/

type Props = {
  name: string;
  isDone: boolean;
};

function Item(props: Props) {
  const { name, isDone } = props;

  return (
    <li className="item">
      {isDone ? (
        <div>
          <del>{name}</del> ✅
        </div>
      ) : (
        <div>{name} ❌</div>
      )}
    </li>
  );
}

export default function TodoList() {
  return (
    <section>
      <h1>Cosas por hacer</h1>
      <ul>
        <Item isDone={true} name="Limpiar la pieza" />
        <Item isDone={false} name="Comprar pan" />
        <Item isDone={true} name="Estudiar react" />
      </ul>
    </section>
  );
}
