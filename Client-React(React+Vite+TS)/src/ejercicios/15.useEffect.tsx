/*
  El evento que dispara se llama "resize"

  window.innerWidth
  window.innerHeight
*/

import { useEffect, useState } from 'react';

function WindowSize() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      console.log('calculando...');
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    // cleanup function
    return () => {
      console.log('me desmonté');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="wrapper">
      <p>
        {windowDimensions.width} / {windowDimensions.height}
      </p>
    </div>
  );
}

export default function App() {
  const [showSize, setShowSize] = useState(true);
  return (
    <div>
      <button onClick={() => setShowSize(!showSize)}>Toggle medición</button>
      {showSize && <WindowSize />}
    </div>
  );
}
