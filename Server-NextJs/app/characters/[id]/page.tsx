import Image from 'next/image';

export default async function ProfilePage({ params }) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const data = await res.json();

  return (
    <div>
      <Image
        src={data.image}
        width={500}
        height={500}
        alt={`Picture of ${data.name}`}
      />
      <h1>{data.name}</h1>
    </div>
  );
}
