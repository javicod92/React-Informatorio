export default async function EpisodesPage() {
  const res = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await res.json();

  return (
    <div>
      {data.results.map((episode) => (
        <h2>{episode.name}</h2>
      ))}
    </div>
  );
}
