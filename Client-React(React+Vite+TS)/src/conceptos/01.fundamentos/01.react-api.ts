// 1. Importamos las dependencias
import React from 'react';
import { createRoot } from 'react-dom/client';
import AlbumItem from './03.componentes';

// 2. Creamos  un elemento de React
const element = React.createElement('h1', { id: 'hello' }, 'Hola info!');
console.log(element);

// 3. Renderizamos la aplicacion
const container = document.querySelector('#root');
if (!container) throw new Error();
const root = createRoot(container);
root.render(element);
