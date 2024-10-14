/*
  Pongamos en práctica los conceptos vistos en /src/fundamentos/02.jsx.tsx
  
  El siguiente código fue extraido de HTML, pero presenta algunos problemas, ya que como aprendimos, el pasaje no es tan lineal.
  
  Tu trabajo es convertirlo a JSX válido para que pueda ser usado en React
*/
export default function Ejercicio1() {
  return (
    <h1>Albums</h1>
    <div class="container">
      <article class="album-container">
        <img
          class="cover"
          src="https://i.scdn.co/image/ab67616d0000b273305240b65c28020de3aac8eb"
        >
        <p class="album-title">Desde el Fin del Mundo</p>
        <p class="album-artist">
          Duki
          <br>
          18 canciones
        </p>
      </article>
    </div>
  );
}
