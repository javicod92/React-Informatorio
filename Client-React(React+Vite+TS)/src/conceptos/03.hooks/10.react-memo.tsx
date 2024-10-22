import React from 'react';

export default function App() {
  return (
    <>
      <Counter />
      <footer>
        <p>Info Counter.</p>
      </footer>
    </>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <main>
      <BigCountNumber count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <InfoPanel />
    </main>
  );
}

const BigCountNumber = React.memo(({ count }: { count: number }) => {
  console.log('render BigCountNumber');
  return (
    <p>
      <span>Count:</span>
      {count}
    </p>
  );
});

const InfoPanel = React.memo(() => {
  console.log('render InfoPanel');
  return <div>Acá estoy mostrando información</div>;
});
