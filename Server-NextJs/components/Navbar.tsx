import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="h-12 flex items-center bg-green-400 w-full justify-center">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/characters">Peronsajes</Link>
          </li>
          <li>
            <Link href="/episodes">Episodios</Link>
          </li>
          <li>
            <Link href="/locations">Ubicaciones</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
