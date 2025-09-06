import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/header';
import Library from './components/Library/Library';
import SearchResults from './components/SearchResults/SearchResults';
import SearchBar from './components/SearchBar/SearchBar';
import SongDetail from './components/SongDetail/SongDetail';

import useFetch from './hooks/useFetch';
import { ThemeProvider } from 'styled-components';
import Theme from './Themes/index'
import GlobalStyle from './Themes/GlobalStyles';


const App = () => {
  const [artist, setArtist] = useState('');
  const [library, setLibrary] = useState([]);
  const [songs, setSongs] = useState([]);

  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = artist
    ? `${proxy}https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(artist)}`
    : null;

  const { data, isLoading, error, retry } = useFetch(url);

  useEffect(() => {
    if (!data || data.length === 0) {
      setSongs([]);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchTracks = async (albums) => {
      try {
        const requests = albums.map((album) =>
          fetch(`${proxy}https://theaudiodb.com/api/v1/json/2/track.php?m=${album.idAlbum}`, { signal }).then((res) => {
            if (!res.ok) throw new Error('Error en una petición de tracks');
            return res.json();
          })
        );

        const responses = await Promise.all(requests);

        const allTracks =
          responses.flatMap((res) =>
            res.track?.map((track) => ({
              id: track.idTrack,
              title: track.strTrack,
              artist: track.strArtist,
              duration: track.intDuration
                ? `${Math.floor(track.intDuration / 60000)}:${String(
                  Math.floor((track.intDuration % 60000) / 1000)
                ).padStart(2, '0')}`
                : 'N/A',
              album: track.strAlbum,
            }))
          ) || [];

        setSongs(allTracks);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Petición abortada por nueva búsqueda');
        } else {
          console.error('Error al obtener tracks:', err);
          setSongs([]);
        }
      }
    };

    fetchTracks(data);

    return () => {
      controller.abort();
    };
  }, [data]);

  const handleAddToLibrary = (song) => {
    if (!library.find((s) => s.id === song.id)) {
      setLibrary([...library, song]);
    }
  };

  useEffect(() => {
    console.log('Biblioteca actualizada:', library);
  }, [library]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={setArtist} />
                {isLoading && <p>Cargando álbumes y canciones...</p>}
                {error && (
                  <div>
                    <p>Hubo un problema al cargar los datos: {error}</p>
                    <button onClick={retry}>Reintentar</button>
                  </div>
                )}
                {!isLoading && !error && (
                  <SearchResults songs={songs.slice(0, 10)} onAddToLibrary={handleAddToLibrary} />
                )}
                <Library songs={library} />
              </>
            }
          />

          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
