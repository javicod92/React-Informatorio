import { createContext, useContext, useState } from 'react';

export default function App() {
  return (
    <FavouriteColorProvider>
      <Home />
    </FavouriteColorProvider>
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

// FavouriteColor Provider
type FavouriteColorContextType = {
  favouriteColor: string;
  changeFavouriteColor: (color: string) => void;
};

export const FavouriteColorContext =
  createContext<FavouriteColorContextType | null>(null);

function FavouriteColorProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [favouriteColor, setFavouriteColor] = useState('#B32323');

  return (
    <FavouriteColorContext.Provider
      value={{ favouriteColor, changeFavouriteColor: setFavouriteColor }}
    >
      {children}
    </FavouriteColorContext.Provider>
  );
}
