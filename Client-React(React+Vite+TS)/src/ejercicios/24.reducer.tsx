// Utilizar useReducer
import { useEffect, useState } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character';

function useFetchData(url: string) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      })
      .catch(() => {
        setError('Hubo un error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}

export default function Peticiones() {
  const { data: characters, isLoading } = useFetchData(API_URL);

  if (isLoading) {
    return <p>Cargando ando....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Peticiones</h1>
      <ul>
        {characters.map((character) => {
          return <li>{character.name}</li>;
        })}
      </ul>
    </div>
  );
}
