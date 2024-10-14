export default async function LocationPage() {
  const res = await fetch('https://rickandmortyapi.com/api/location');
  const data = await res.json();

  return (
    <div>
      {data.results.map((location) => (
        <h2>{location.name}</h2>
      ))}
    </div>
  );
}
