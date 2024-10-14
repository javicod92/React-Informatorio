/*
  Two-Factor Validator

  Cuando el usuario aprieta el botón de "Validar", debe aparecer un mensaje en pantalla que diga si el código es correcto o no.

  Que el boton aparezca deshabilitado si el input ingresado no es de 6 dígitos.

  No permitir escribir mas de 6 dígitos
*/

import { FormEvent, ChangeEvent, useState } from 'react';

const CORRECT_CODE = '123456';

export default function Validator() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (code === CORRECT_CODE) {
      setMessage('Perfect! Código correcto!');
    } else {
      setMessage('Nao nao. Código incorrecto. Intentalo nuevamente');
    }
  }

  function handleCodeChange(event: ChangeEvent<HTMLInputElement>) {
    const newInputValue = Number(event.target.value);
    if (!isNaN(newInputValue)) {
      if (event.target.value.length <= 6) {
        setCode(String(newInputValue));
      }
    }
  }

  return (
    <div>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="code">Codigo</label>
        <input
          id="code"
          type="text"
          value={code}
          onChange={handleCodeChange}
          maxLength={6}
        />
        <button disabled={code.length < 6} type="submit">
          Validar
        </button>
      </form>
    </div>
  );
}
