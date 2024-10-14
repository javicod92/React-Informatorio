import { ReactNode } from 'react';

type Props = {
  sectionTitle: string;
  children: ReactNode;
};

function MoviesContainer(props: Props) {
  return (
    <section className="movies-container">
      <h3>{props.sectionTitle}</h3>
      <div className="movies">{props.children}</div>
    </section>
  );
}

type MovieItemProps = {
  img: string;
  title: string;
};
function MovieItem({ title, img }: MovieItemProps) {
  return (
    <article>
      <img src={img} className="movie-cover" />
      <p>{title}</p>
    </article>
  );
}

function MovieSection() {
  return (
    <>
      <MoviesContainer sectionTitle="Destacados">
        <MovieItem
          img="https://images.justwatch.com/backdrop/52992074/s480/harry-potter-and-the-philosophers-stone"
          title="Harry Potter"
        />
        <MovieItem
          img="https://es.web.img2.acsta.net/newsv7/20/04/17/13/27/1616518.jpg"
          title="Piratas del Caribe"
        />
        <MovieItem
          img="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/dune-2-release-date-delayed-amid-warner-bros-schedule-shuffle.jpg"
          title="Dune"
        />
      </MoviesContainer>
      <MoviesContainer sectionTitle="Otra cosa title">
        <p>soy otra cosa</p>
      </MoviesContainer>
    </>
  );
}

export default MovieSection;
