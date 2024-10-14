'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function CharacterItem({ character }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="flex gap-1 bg-sky-900 rounded-sm">
      <Image
        src={character.image}
        alt={character.name}
        width={230}
        height={230}
        className="w-56 h-56 rounded-sm"
      />
      <div className="p-4">
        <span className="flex gap-4">
          <Link
            href={`/characters/${character.id}`}
            className="text-3xl font-bold"
          >
            {character.name}
          </Link>
          <button
            onClick={(event) => {
              setIsLiked(!isLiked);
            }}
          >
            {isLiked ? '❤️' : '🤍'}
          </button>
        </span>
        <p>
          {character.status} - {character.species}
        </p>
        <p>Last known location:</p>
        <Link href={`/locations/${character.location.url.split('/').pop()}`}>
          {character.location.name}
        </Link>
        <p>First seen in:</p>
        <Link href={`/locations/${character.location.url.split('/').pop()}`}>
          {character.origin.name}
        </Link>
      </div>
    </div>
  );
}
