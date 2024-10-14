import { useEffect, useState } from 'react';
import { useToggle } from './17.customs-hooks';

function useWindowsSize() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width: windowDimensions.width, height: windowDimensions.height };
}

function WindowSize() {
  const { width, height } = useWindowsSize();

  return (
    <div className="wrapper">
      <p>
        {width} / {height}
      </p>
    </div>
  );
}

export default function App() {
  const { value: showSize, toggle: toggleSize } = useToggle(true);
  return (
    <div>
      <button onClick={toggleSize}>Toggle medición</button>
      {showSize && <WindowSize />}
    </div>
  );
}
