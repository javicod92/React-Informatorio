import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Hooks from './conceptos/03.hooks/12.useCallback';
import Ejercicio from './ejercicios/24.reducer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hooks />
    {/* <Ejercicio /> */}
  </React.StrictMode>
);
