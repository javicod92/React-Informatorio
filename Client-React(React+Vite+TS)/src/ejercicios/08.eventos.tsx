/*
  Agregar a estos botones el comportamiento de que cuando hago click en uno muestre el mensaje correspondiente por consola o por un alert.
*/

export default function Buttons() {
  function handleClick(type: 'win' | 'lose') {
    if (type === 'win') {
      alert('Ganaste');
    } else if (type === 'lose') {
      alert('Perdiste');
    }
  }

  return (
    <div>
      <button onClick={() => handleClick('win')}>Gane! :)</button>
      <button onClick={() => handleClick('lose')}>Perdí :(</button>
    </div>
  );
}
