/*
  Escribimos el markup para renderizar la información de 3 contactos, pero hay mucha repetición para lograr esto. Creen un nuevo componente "ContactCard", y luego reutilicenlo.
*/
type Props = {
  name: string;
  job: string;
  email: string;
};
function ContactCard(props: Props) {
  console.log('props', props.email);
  const { email, job, name } = props;
  return (
    <li>
      <h2>{name}</h2>
      <p>Trabajo: {job}</p>
      <p>Email: {email}</p>
    </li>
  );
}

function Ejercicio3() {
  return (
    <ul>
      <ContactCard email="gerard@asdf.com" job="Programador" name="Gerardo" />
      <ContactCard email="robert@asdf.com" job="Programador" name="Roberto" />
      <ContactCard email="pepe@asdf.com" job="Programador" name="Sergio" />
      <ContactCard email="veraz@asdf.com" job="Programador" name="Javier" />
      <ContactCard email="antonio@asdf.com" job="Programador" name="Banderas" />
    </ul>
  );
}

export default Ejercicio3;
