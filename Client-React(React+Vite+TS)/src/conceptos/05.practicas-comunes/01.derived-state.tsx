import { useEffect, useState } from 'react';

const MAX_CHARACTERS = 120;

export default function DerivedState() {
  const [message, setMessage] = useState('');
  const counter = MAX_CHARACTERS - message.length;

  return (
    <>
      <textarea
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <p>{counter}</p>
    </>
  );
}
