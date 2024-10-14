import styles from './09.estilos.module.css';

export default function AlbumItem() {
  console.log('hola', styles);
  return (
    <article className={styles.container}>
      <img
        className={styles.cover}
        src="https://i.scdn.co/image/ab67616d0000b273305240b65c28020de3aac8eb"
      />
      <p className={styles.title}>Desde el Fin del Mundo</p>
      <p>
        Duki
        <br />
        18 canciones
      </p>
    </article>
  );
}
