import { ReactNode } from 'react';

/*
  Como en el ejercicio anterior. Este markup tiene mucha repetición.

  Detectarlas y extraerlas a un componente nuevo.
  Aplicar pasar props y utilizar la prop children.
*/
type Props = {
  title: string;
  children: ReactNode;
};

function Card({ title, children }: Props) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

function Ejercicio4() {
  return (
    <div>
      <Card title="Foto">
        <img
          className="avatar"
          src="https://i.imgur.com/qp4mbtj.jpeg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card title="Info">
        <p>
          Mauro Ezequiel Lombardo Quiroga (Almagro, Buenos Aires; 24 de junio de
          1996), conocido artísticamente como Duki, es un rapero argentino.1​ Se
          le acredita el haber popularizado el género del trap a nivel nacional,
          siendo precursor de la explosión del trap latino en Argentina y
          Sudamérica. Es nombrado en varios medios como el "Líder del movimiento
          urbano" de su país.2​
        </p>
      </Card>
      <Card title="Botones">
        <button>porque</button>
        <button>quiero</button>
        <button>botones</button>
        <button>je</button>
      </Card>
    </div>
  );
}

export default Ejercicio4;
