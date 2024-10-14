type Props = {
  name: string;
  image: string;
  size?: number;
};

function Profile({ name, image, size = 180 }: Props) {
  return (
    <div>
      <h2>Perfil de {name}</h2>
      <img
        className="avatar-props"
        src={image}
        alt={name}
        width={size}
        height={size}
      />
    </div>
  );
}

function ProfileList() {
  return (
    <>
      <Profile
        name="Luis Miguel"
        image="https://luismigueloficial.com/themes/lm/assets/images/1990_s_2_mov.jpg"
      />
      <Profile
        name="Michael Jackson"
        image="https://media.ambito.com/p/0119048c5c25d2053c140d9c035c3995/adjuntos/239/imagenes/040/787/0040787673/michael-jackson-subastajpg.jpg"
      />
      <Profile
        name="Joaquin Sabina"
        image="https://www.cmtv.com.ar/imagenes_artistas/266.webp"
        size={100}
      />
    </>
  );
}

export default ProfileList;
