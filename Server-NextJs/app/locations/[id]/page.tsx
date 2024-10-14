import Image from 'next/image';

export default async function LocationPage({ params }) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/location/${params.id}`
  );
  const data = await res.json();

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}
