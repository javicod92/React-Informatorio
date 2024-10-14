// 1. Importamos las dependencias
import React from 'react';
import { createRoot } from 'react-dom/client';

// 2. Creamos un elemento de React usando JSX
const element = (
  <nav id="main-nav">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/archives">Archives</a>
      </li>
    </ul>
  </nav>
);

// 3. Renderizamos la aplicacion
const container = document.querySelector('#app');
if (!container) throw new Error();
const root = createRoot(container);
root.render(element);
