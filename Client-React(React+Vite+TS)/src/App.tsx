import reactLogo from './assets/react.svg';
import infoLogo from './assets/info.png';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a
          href="https://campus-informatorio.chaco.gob.ar/course/view.php?id=7"
          target="_blank"
        >
          <img src={infoLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Informatorio 2024</h1>
      <div className="card">
        <p>
          Dentro de <code>src/conceptos</code> vas a encontrar todo lo que vemos
          y aprendemos en clases
        </p>
      </div>
      <p className="read-the-docs">
        Para probar cada concepto modificar que se importa en{' '}
        <code>src/main.js</code> y/o <code>index.html</code>, lo que fuese
        necesario
      </p>
    </>
  );
}

export default App;
