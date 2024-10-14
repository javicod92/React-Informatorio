export default function Button() {
  function handleClick() {
    alert('Hola info!');
  }

  return <button onClick={handleClick}>Soy un boton</button>;
}
