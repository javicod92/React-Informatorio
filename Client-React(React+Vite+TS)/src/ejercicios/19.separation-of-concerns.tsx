/*
  Extraer al menos 1 potencial componente reutilizable (pueden ser más)
*/

import React from 'react';
import { range } from '../utils';

function PhotoPicker({ photos }: { photos: Array<string> }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = React.useState(0);
  return (
    <div>
      <div>
        <img alt="" src={photos[selectedPhotoIndex]} width={500} height={500} />
        <div style={{ display: 'flex' }}>
          {photos.map((photoSrc, index) => {
            const isSelected = selectedPhotoIndex === index;

            return (
              <button
                key={photoSrc}
                onClick={() => setSelectedPhotoIndex(index)}
              >
                <img alt="" src={photoSrc} width={50} height={50} />
                <span
                  style={{
                    opacity: isSelected ? 1 : 0,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Rating({ rating }: { rating: number }) {
  return (
    <div>
      {range(5).map((num) => {
        return rating > num ? '❤️' : '🤍';
      })}
    </div>
  );
}

type Props = {
  product: {
    id: string;
    title: string;
    description: string;
    price: string;
    rating: number;
    photos: Array<string>;
  };
};
function ProductDetails({ product }: Props) {
  return (
    <article>
      <PhotoPicker photos={product.photos} />
      <div>
        <h1>{product.title}</h1>
        <Rating rating={product.rating} />
        <p>{product.description}</p>
      </div>
    </article>
  );
}

const product_item = {
  id: 'abc123',
  title:
    'Sandwich Maker Toaster and Electric Panini Press with Futuristic Spaceship Design Non Stick Plates LED Indicator Lights Cool Rocketship Best Toaster',
  description: `Make Hot Sandwiches and More: Get the  sandwich maker, it cooks the hot sandwich maker quickly in the morning, lets you have the fast and healthy breakfast. The sandwich maker presses sandwiches, grills omelets, and even crisps French toast in one product. Simple and efficient.

Easy to Clean: Thanks to the non-stick grill plates, it ensures effortless food release and quick cleanup, simply wipe them clean with a damp cloth once they’ve cooled. The dimension of nonstick plates is 8.46x4.92in.

Compact Design&Storage: Built for small spaces and outdoor use, the sandwich machine is compact in size and can be stored upright, taking up minimal cabinet space. What’s more, it’s convenient to take outside to use in your yard, garden.`,
  price: '129.99',
  rating: 4,
  photos: [
    'https://sandpack-bundler.vercel.app/img/space-toaster-01.jpg',
    'https://sandpack-bundler.vercel.app/img/space-toaster-02.jpg',
    'https://sandpack-bundler.vercel.app/img/space-toaster-03.jpg',
    'https://sandpack-bundler.vercel.app/img/space-toaster-04.jpg',
  ],
};
export default function App() {
  return <ProductDetails product={product_item} />;
}
