import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Patrones from './conceptos/04.patrones-de-diseño/09.context';
import Ejercicio from './ejercicios/22.render-props';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Patrones />
    {/* <Ejercicio /> */}
  </React.StrictMode>
);
