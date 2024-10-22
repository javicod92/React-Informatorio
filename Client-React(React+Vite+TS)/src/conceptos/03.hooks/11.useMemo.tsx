import React from 'react';

export default function App() {
  const [selectedNum, setSelectedNum] = React.useState(100);
  const time = useTime();
  console.log('render');
  const allPrimes = React.useMemo(() => {
    console.log('calculo costoso');
    const result = [];

    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        result.push(counter);
      }
    }

    return result;
  }, [selectedNum]);

  return (
    <>
      <p className="clock">{time.getMilliseconds()}</p>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          id="num"
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // To prevent computers from exploding,
            // we'll max out at 100k
            let num = Math.min(100_000, Number(event.target.value));

            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{' '}
        <span className="prime-list">{allPrimes.join(', ')}</span>
      </p>
    </>
  );
}

function isPrime(n: number) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    // Effect logic
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      // Cleanup logic
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
}
