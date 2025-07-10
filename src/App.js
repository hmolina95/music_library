import React, { useState, useEffect } from 'react';
import Header from './components/Header/header';
import Song from './components/Song/song';
import Library from './components/Library/Library';
import SearchResults from './components/SearchResults/SearchResults';
import './App.css';

const App = () => {

  const [searchResults] = useState([
    { id: 1, title: "Apple", artist: "Charli XCX", duration: "2:49" },
    { id: 2, title: "Wish You Were Here", artist: "Pink Floyd", duration: "5:04" },
    { id: 3, title: "Born To Die", artist: "Lana Del Rey", duration: "3:34" }
  ])

  const [library, setLibrary] = useState([]);

  const handleAddToLibrary = (song) => {
    if (!library.find(s => s.id === song.id)) {
      setLibrary([...library, song]);
    }
  };

  useEffect(() => {
    console.log('La biblioteca ha sido actualizada:', library);
  }, [library]);

  return (
    <div className="App">
      <Header />
      <SearchResults songs={searchResults} onAddToLibrary={handleAddToLibrary} />
      <Library songs={library} />
    </div>
  );
}

export default App;
