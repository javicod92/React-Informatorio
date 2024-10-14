import { ChangeEvent, FormEvent, useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Subiendo datos...', { username });
  }

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Username:</label>
      <input
        type="text"
        id="search-input"
        value={username}
        onChange={handleUsernameChange}
      />
      <button type="submit">Subir</button>
    </form>
  );
}
