'use client';

import { useState } from "react";

const favoriteThings = [
  'Chocolate',
  'Javascript',
  'Python'
];

// function addFavoriteThing (newThing: string) {
//     favoriteThings.push(newThing);
// }

export default function Home() {

  const [ newFavoriteThing, setNewFavoriteThing ] = useState('');
  const [ favoriteThings, setFavoriteThings ] = useState([
    'Chocolate',
    'Javascript',
    'Python'
  ]);

  function addThing() {
    setFavoriteThings([...favoriteThings, newFavoriteThing]);
    setNewFavoriteThing('');
  }

  return (
    <main className="bg-green-800 justify-center items-center w-full">
      <h1>Hello Kash</h1>
      <h2>MY favorite Things</h2> 
      <input
        className=""
        placeholder="My Favorite Things"
        value={newFavoriteThing}
        onChange={(event) => setNewFavoriteThing(event.target.value)}
      />
      <button onClick={addThing}>Add My Favorite Things</button>
      <ul>
        {favoriteThings.map(function(thing) {
          return <li key={thing}>{thing}</li>
        })}
      </ul>
    
    </main>
  );
}
