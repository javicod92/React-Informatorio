import { useState } from 'react';

function Celcius({ value = 0 }: { value?: number }) {
  return <p>{value} en celcius</p>;
}

function Fahrenheit({ value = 0 }: { value?: number }) {
  return <p>{((value * 9) / 5 + 32).toFixed(2)} en fahrenheit</p>;
}

function Input({ render }: { render: (value: string) => JSX.Element }) {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {render(value)}
    </>
  );
}

export default function App() {
  return (
    <div>
      <h1>Conversor</h1>
      <Input
        render={(value) => {
          return (
            <div>
              <Celcius value={Number(value)} />
              <Fahrenheit value={Number(value)} />
            </div>
          );
        }}
      />
    </div>
  );
}
