const name = 'Luis Miguel';
const src =
  'https://luismigueloficial.com/themes/lm/assets/images/1990_s_2_mov.jpg';

export default function Profile() {
  return (
    <div>
      <h1>Perfil de {name}</h1>
      <img className="avatar" src={src} alt={name} />
    </div>
  );
}
