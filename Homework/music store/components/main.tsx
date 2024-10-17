'use client'
import React, { useState } from 'react';
import './Main.css';
import { useRouter } from 'next/navigation';
import { link } from 'fs';
import Link from 'next/link';


const instruments = [
  {
    id:1,
    name: 'Furch Guitars Dreadnought Sitka Spruce',
    price: 999,
    original_price: 1500,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/09/Furch-Guitars-Dreadnought-Sitka-SpruceIndian-Rosewood-Yellow-7-600x600.jpg',
    is_new: false,
    likes: 1060,
  },
  {
    id:2,
    name: 'Electric Piano Yamaha PSR-SX920',
    price: 899,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/09/Yamaha-PSR-SX920-6.jpg',
    is_new: false,
    likes: 2300,
  },
  {
    id:3,
    name: 'Gibson 1960 Les Paul Black Beauty Electric Guitar',
    price: 5000,
    image_url: 'https://cdn11.bigcommerce.com/s-dks6ju/images/stencil/500x500/products/12727/309299/010498_01__11452.1718130884.jpg?c=2',
    is_new: false,
    likes: 8000,
  },
  {
    id:4,
    name: 'MARSHALL Electric Guitar Amp',
    price: 800,
    original_price: 1000,
    image_url: 'https://www.thexoundmusicstore.com/cdn/shop/products/marshall-code-25-ink_1024x1024@2x.jpg?v=1632906450',
    is_new: false,
    likes: 2500,
  },
  {
    id:5,
    name: 'Electric Drum EFNOTE 3B',
    price: 10000,
    original_price: 20000,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/10/EFNOTE-3B.jpg',
    is_new: false,
    likes: 7000,
  },
  {
    id:6,
    name: 'Native Instruments Maschine Mikro MK3 (Black)',
    price: 1206,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/10/Native-Instruments-Maschine-Mikro-MK3-Black-600x600.jpg',
    is_new: false,
    likes: 10000,
  },
  {
    id:7,
    name: 'Eletric Guitar Strandberg Boden Metal NX 7 ',
    price: 5000,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/10/Strandberg-Boden-Metal-NX-7-%E2%80%93-Blood-Red-8-600x600.jpg',
    is_new: false,
    likes: 10000,
  },
  {
    id:8,
    name: 'Rode PodMic USB',
    price: 550,
    original_price: 770,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2024/10/Rode-PodMic-USB-600x600.jpg',
    is_new: false,
    likes: 500,
  },
  {
    id:9,
    name: 'Radial J48 Stereo Active DI',
    price: 500,
    original_price: 790,
    image_url: 'https://iguitarmusic.co.th/wp-content/uploads/2022/08/j48-stereo-thumb-768x969-1-600x600.jpg',
    is_new: false,
    likes: 2000,
  },
  {id:10,
    name: 'NIRVANA: KURT COBAIN SMASHED AND BAND-SIGNED "NEVERMIND" ERA FENDER STRATOCASTER ELECTRIC GUITAR',
    price: 899000,
    original_price: 1000000,
    image_url: 'https://bid.juliensauctions.com/images/lot/5380/538056_l.jpg?ts=1727380508',
    is_new: false,
    likes: 200000,
  },
];

export default function Main() {
  const router = useRouter();
  const [gameLikes, setGameLikes] = useState(instruments);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [editId, setEditId] = useState(-1);

  const handleLike = (index: number) => {
    const newLikes = [...gameLikes];
    newLikes[index].likes += 1;
    setGameLikes(newLikes);
  };

  function addInstrument() {
    if (editId !== -1) {
      const temp = [...gameLikes];
      temp[editId] = {
        ...temp[editId],
        name,
        price,
        original_price: originalPrice || undefined,
        image_url: imageUrl,
        is_new: isNew,
      };
      setGameLikes(temp);
      setEditId(-1);
    } else {
      const newInstrument = {
        id: gameLikes[gameLikes.length - 1]?.id + 1 || 1,
        name: name,
        price: price,
        original_price: originalPrice || undefined,
        image_url: imageUrl,
        is_new: isNew,
        likes: 0,
      };
      setGameLikes([...gameLikes, newInstrument]);
    }
    setName('');
    setPrice('');
    setOriginalPrice('');
    setImageUrl('');
    setIsNew(false);
  }

  function editInstrument(id: number) {
    const index = gameLikes.findIndex((instrument) => instrument.id === id);
    if (index !== -1) {
      setEditId(index);
      setName(gameLikes[index].name);
      setPrice(gameLikes[index].price);
      setOriginalPrice(gameLikes[index].original_price || '');
      setImageUrl(gameLikes[index].image_url);
      setIsNew(gameLikes[index].is_new);
    }
  }

  function deleteInstrument(id: number) {
    setGameLikes(gameLikes.filter((instrument) => instrument.id !== id));
  }

  function goToOrderPage(name: string) {
    router.push(`/report/${name}`);
    
  }

  return (
    <main className="container ">
      <div className="header">
        <h2>Aviable Stock in store</h2>
        <button className="view-all hover:bg-indigo-700">View All</button>
      </div>
      <div className="add">
        <div className="add-instrument">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-blue-700 p-2 m-1 text-xl rounded-md text-center"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-blue-700 p-2 m-1 text-xl rounded-md text-center"
          />
          <input
            type="number"
            placeholder="Original Price"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="border-2 border-blue-700 p-2 m-1 text-xl rounded-md text-center"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="border-2 border-blue-700 p-2 m-1 text-xl rounded-md text-center"
          />
          <button
            onClick={() => setIsNew(!isNew)}
            className={`border-2 rounded-md  border-blue-700 m-1 p-2 ${isNew ? 'bg-blue-700' : 'bg-white'} hover:bg-blue-500`}
          >
            {isNew ? 'New' : 'Not New'}
          </button>
          <button onClick={addInstrument} className="border-2 border-blue-700 m-1 p-2 rounded-md text-center hover:bg-blue-500">{editId === -1 ? 'Add Instrument' : 'Update Instrument'}</button>
        </div>
      </div>
      <div className="game-grid">
        {gameLikes.map((instrument, index) => (
          <div key={instrument.id} className="game-card">
            {instrument.is_new && <div className="new-tag m-4 new">New</div>}

            <img src={instrument.image_url} alt={instrument.name} className="game-image " onClick={() => router.push(`/report/${instrument.id}`)} />

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
              <button onClick={() => editInstrument(instrument.id)} className="edit-button border-2 m-2 p-1">Edit</button>
              <button onClick={() => deleteInstrument(instrument.id)} className="delete-button border-2 m-2 p-1">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <br />
      
     
      
    </main>
  );
}
