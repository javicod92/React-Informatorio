import React from 'react';

export default function App() {
  console.log('Render app');
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

  console.log('Render Counter');
  return (
    <main>
      <BigCountNumber count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <InfoPanel />
    </main>
  );
}

function BigCountNumber({ count }: { count: number }) {
  console.log('render BigCountNumber');
  return (
    <p>
      <span>Count:</span>
      {count}
    </p>
  );
}

function InfoPanel() {
  console.log('render InfoPanel');
  return <div>Acá estoy mostrando información</div>;
}
