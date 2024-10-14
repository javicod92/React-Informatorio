import { useState } from 'react';

export function useToggle(initialState?: boolean) {
  const [value, setValue] = useState(initialState);

  function toggle() {
    setValue(!value);
  }

  return { value, toggle };
}

export default function CustomHooks() {
  const { value, toggle } = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>{value ? 'Apagar' : 'Prender'}</button>
      {value ? 'Prendido' : 'Apagado'}
    </div>
  );
}
