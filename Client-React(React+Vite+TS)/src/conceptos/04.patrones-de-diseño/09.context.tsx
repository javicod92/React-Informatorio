import { createContext, useContext, useState } from 'react';

type FavouriteColorContextType = {
  favouriteColor: string;
  changeFavouriteColor: (color: string) => void;
};

// Creamos un nuevo context
export const FavouriteColorContext =
  createContext<FavouriteColorContextType | null>(null);

export default function App() {
  const [favouriteColor, setFavouriteColor] = useState('#B32323');

  // Envolvemos nuestra aplicación con el Provider
  return (
    <FavouriteColorContext.Provider
      value={{ favouriteColor, changeFavouriteColor: setFavouriteColor }}
    >
      <Home />
    </FavouriteColorContext.Provider>
  );
}

function Home() {
  const favouriteColorContext = useContext(FavouriteColorContext);

  return (
    <div style={{ background: favouriteColorContext?.favouriteColor }}>
      <h1>hola</h1>
      <label htmlFor="color">Cambiar color</label>
      <input
        id="color"
        type="color"
        value={favouriteColorContext?.favouriteColor}
        onChange={(event) => {
          favouriteColorContext?.changeFavouriteColor(event.target.value);
        }}
      />
    </div>
  );
}
