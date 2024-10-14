/*
  Crear un component Alert, que reciba las siguiente propiedades
  title: un string que se tiene que mostrar en la alerta
  type: que puede ser "error" | "info" | "warning" | "success"

  Si el type es error se debe mostrar un background rojo en la alerta

  Si el type es info se debe mostrar un background azul en la alerta

  Si el type es warning se debe mostrar un background amarillo en la alerta

  Si el type es success se debe mostrar un background verde en la alerta
*/

type Props = {
  title: string;
  type: 'error' | 'info' | 'warning' | 'success';
};

function Alert(props: Props) {}
