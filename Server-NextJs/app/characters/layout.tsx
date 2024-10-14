import CharacterItem from '@/components/CharacterItem';

export default async function CharacterLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return (
    <div className="flex gap-4">
      <div className="grid grid-cols-1 gap-6">
        {data.results.map((character) => {
          return <CharacterItem key={character.id} character={character} />;
        })}
      </div>
      {children}
    </div>
  );
}
