import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Patrones from './conceptos/04.patrones-de-diseño/04.polimorfismo';
import Ejercicio from './ejercicios/20.prop-delegation';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Patrones />
    {/* <Ejercicio /> */}
  </React.StrictMode>
);
