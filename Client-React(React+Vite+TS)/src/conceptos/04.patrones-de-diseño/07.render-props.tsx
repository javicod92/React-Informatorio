/* 
  ACLARACION: Esto es solo un ejemplo. Claramente es como matar un mosquito con una Bazooka, y no tiene sentido aplicar este patrón en este caso. Pero es para que quede simple y se entienda que es una render prop.
*/

function Title({ render }: { render: () => JSX.Element }) {
  return render();
}

export default function App() {
  return (
    <Title
      render={() => {
        return <h1>Hola estoy aprendiendo render props</h1>;
      }}
    />
  );
}
