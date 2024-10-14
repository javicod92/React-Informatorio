import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Practicas from './conceptos/05.practicas-comunes/03.elementos';
import Ejercicio from './ejercicios/22.render-props';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Practicas />
    {/* <Ejercicio /> */}
  </React.StrictMode>
);
