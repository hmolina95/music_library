import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SongDetail = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = `${proxy}https://theaudiodb.com/api/v1/json/2/track.php?h=${id}`;

  useEffect(() => {
    const fetchSong = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

        const data = await res.json();
        if (data.track && data.track.length > 0) {
          const track = data.track[0];
          setSong({
            title: track.strTrack,
            artist: track.strArtist,
            album: track.strAlbum,
            duration: track.intDuration
              ? `${Math.floor(track.intDuration / 60000)}:${String(Math.floor((track.intDuration % 60000) / 1000)).padStart(2, '0')}`
              : 'N/A'
          });
        } else {
          setError('Canción no encontrada.');
        }
      } catch (err) {
        setError(err.message || 'Error desconocido.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSong();
  }, [url]);

  if (isLoading) return <p>Cargando canción...</p>;
  if (error) return <p>{error}</p>;
  if (!song) return null;

  return (
    <div>
      <h2>{song.title}</h2>
      <p>Artista: {song.artist}</p>
      <p>Álbum: {song.album}</p>
      <p>Duración: {song.duration}</p>
    </div>
  );
};

export default SongDetail;
