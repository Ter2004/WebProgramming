"use client";
import React, { useState } from 'react';
import './Main.css';

const instruments = [
  {
    name: 'Furch Guitars Dreadnought Sitka Spruce',
    price: 999,
    original_price: 1500,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/09/Furch-Guitars-Dreadnought-Sitka-SpruceIndian-Rosewood-Yellow-7-600x600.jpg',
    is_new: false,
    likes: 1060,
  },
  {
    name: 'Electric Piano Yamaha PSR-SX920',
    price: 899,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/09/Yamaha-PSR-SX920-6.jpg',
    is_new: false,
    likes: 2300,
  },
  {
    name: 'Gibson 1960 Les Paul Black Beauty Electric Guitar',
    price: 5000,
    image_url: 'https://cdn11.bigcommerce.com/s-dks6ju/images/stencil/500x500/products/12727/309299/010498_01__11452.1718130884.jpg?c=2',
    is_new: false,
    likes: 8000,
  },
  {
    name: 'MARSHALL Electric Guitar Amp',
    price: 800,
    original_price: 1000,
    image_url: 'https://www.thexoundmusicstore.com/cdn/shop/products/marshall-code-25-ink_1024x1024@2x.jpg?v=1632906450',
    is_new: false,
    likes: 2500,
  },
  {
    name: 'Electric Drum EFNOTE 3B',
    price: 10000,
    original_price: 20000,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/10/EFNOTE-3B.jpg',
    is_new: false,
    likes: 7000,
  },
  {
    name: 'Native Instruments Maschine Mikro MK3 (Black)',
    price: 1206,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/10/Native-Instruments-Maschine-Mikro-MK3-Black-600x600.jpg',
    is_new: false,
    likes: 10000,
  },
  {
    name: 'Eletric Guitar Strandberg Boden Metal NX 7 ',
    price: 5000,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/10/Strandberg-Boden-Metal-NX-7-%E2%80%93-Blood-Red-8-600x600.jpg',
    is_new: false,
    likes: 10000,
  },
  {
    name: 'Rode PodMic USB',
    price: 550,
    original_price: 770,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/10/Rode-PodMic-USB-600x600.jpg',
    is_new: false,
    likes: 500,
  },
  {
    name: 'Radial J48 Stereo Active DI',
    price: 500,
    original_price: 790,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2022/08/j48-stereo-thumb-768x969-1-600x600.jpg',
    is_new: false,
    likes: 2000,
  },
  {
    name: 'NIRVANA: KURT COBAIN SMASHED AND BAND-SIGNED "NEVERMIND" ERA FENDER STRATOCASTER ELECTRIC GUITAR',
    price: 899000,
    original_price: 1000000,
    image_url: 'https://bid.juliensauctions.com/images/lot/5380/538056_l.jpg?ts=1727380508',
    is_new: false,
    likes: 200000,
  },
];

interface Instrument {
  name: string;
  price: number;
  original_price?: number;
  image_url: string;
  is_new: boolean;
  likes: number;
}

export default function Main() {
  const [gameLikes, setGameLikes] = useState<Instrument[]>(instruments);
  const [searchTerm, setSearchTerm] = useState('');

  const [newInstrument, setNewInstrument] = useState<Instrument>({
    name: '',
    price: 0,
    image_url: '',
    original_price: undefined,
    is_new: false,
    likes: 0,
  });

  const handleLike = (index: number) => {
    const newLikes = [...gameLikes];
    newLikes[index].likes += 1;
    setGameLikes(newLikes);
  };

  const filteredInstruments = gameLikes.filter((instrument) =>
    instrument.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddInstrument = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, price, image_url, original_price } = newInstrument;

    if (name && price && image_url) {
      setGameLikes([
        ...gameLikes,
        {
          name,
          price: Number(price),
          image_url,
          original_price: original_price ? Number(original_price) : undefined,
          likes: 0,
          is_new: false,
        },
      ]);
      // Clear the form
      setNewInstrument({ name: '', price: 0, image_url: '', original_price: undefined, is_new: false, likes: 0 });
    }
  };

  return (
    <main className="container">
      <div className="header">
        <h2 className="text-2xl font-bold text-black sm:text-3xl">Available product</h2>
        <button className="view-all hover:bg-indigo-700">View All</button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search instruments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-black rounded"
        />
      </div>

      <form onSubmit={handleAddInstrument} className="mb-4">
        <h3 className="text-xl font-bold">Add New Instrument</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Name"
            value={newInstrument.name}
            onChange={(e) => setNewInstrument({ ...newInstrument, name: e.target.value })}
            className="flex-1 p-2 border border-black rounded"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newInstrument.price || ''}
            onChange={(e) => setNewInstrument({ ...newInstrument, price: Number(e.target.value) })}
            className="flex-1 p-2 border border-black rounded"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newInstrument.image_url}
            onChange={(e) => setNewInstrument({ ...newInstrument, image_url: e.target.value })}
            className="flex-1 p-2 border border-black rounded"
            required
          />
          <input
            type="number"
            placeholder="Original Price (optional)"
            value={newInstrument.original_price || ''}
            onChange={(e) => setNewInstrument({ ...newInstrument, original_price: Number(e.target.value) })}
            className="flex-1 p-2 border border-black rounded"
          />
          <button type="submit" className="p-2 bg-green-500 text-white rounded">Add</button>
        </div>
      </form>

      <div className="game-grid">
        {filteredInstruments.map((instrument, index) => (
          <div key={index} className="game-card">
            <img src={instrument.image_url} alt={instrument.name} className="game-image" />
            <div className="game-details flex items-center justify-between m-5">
              <div>
                {instrument.original_price ? (
                  <div className="price-tag">
                    <span className="original-price">${instrument.original_price}</span>
                    <span className="discount-price">${instrument.price}</span>
                  </div>
                ) : (
                  <span className="price">${instrument.price}</span>
                )}
                <h3>{instrument.name}</h3>
              </div>
              <div className="like-section">
                <button onClick={() => handleLike(index)} className="like-button">Like</button>
                <span>{instrument.likes} Likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
