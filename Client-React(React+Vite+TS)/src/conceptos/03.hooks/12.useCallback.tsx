import React from 'react';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const handleMegaBoost = React.useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []);

  // const handleMegaBoost = React.useMemo(() => {
  //   return function () {
  //     setCount((currentValue) => currentValue + 1234);
  //   };
  // }, []);

  return (
    <>
      Count: {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>
      <MegaBoost handleClick={handleMegaBoost} />
    </>
  );
}

const MegaBoost = React.memo(({ handleClick }: { handleClick: () => void }) => {
  console.log('Render MegaBoost');

  return <button onClick={handleClick}>MEGA BOOST!</button>;
});
