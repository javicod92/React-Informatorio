/*
  Partiendo de este ejercicio, realizar los pasos necesarios para renderizar ContactCard de forma dinámica
*/

const CONTACTS = [
  { email: 'gerard@asdf.com', job: 'Programador', name: 'gerardo' },
  { email: 'robert@asdf.com', job: 'Programador', name: 'Roberto' },
  { email: 'pepe@asdf.com', job: 'Programador', name: 'Sergio' },
  { email: 'veraz@asdf.com', job: 'Programador', name: 'Javier' },
  { email: 'antonio@asdf.com', job: 'Programador', name: 'Banderas' },
];

type Props = {
  name: string;
  job: string;
  email: string;
};
function ContactCard(props: Props) {
  const { email, job, name } = props;
  return (
    <li>
      <h2>{name}</h2>
      <p>Trabajo: {job}</p>
      <p>Email: {email}</p>
    </li>
  );
}

function Ejercicio5() {
  return (
    <ul>
      {CONTACTS.map((contact) => {
        return (
          <ContactCard
            key={contact.email}
            email={contact.email}
            job={contact.job}
            name={contact.name}
          />
        );
      })}
    </ul>
  );
}

export default Ejercicio5;
