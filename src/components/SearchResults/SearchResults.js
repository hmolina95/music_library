import { Link } from 'react-router-dom';
import React from 'react';
import Song from '../Song/song';
import Styles from '../SearchResults/styles.css';

const SearchResults = ({ songs, onAddToLibrary }) => {
    return (
        <div>
            <h2>Resultados de búsqueda</h2>
            <div>
                {songs.map(song => (
                    <div key={song.id} className="search-song">
                        <Link to={`/song/${song.id}`} className="song-link">
                            <Song
                                title={song.title}
                                artist={song.artist}
                                duration={song.duration}
                            />
                        </Link>
                        <button onClick={() => onAddToLibrary(song)}>Agregar a mi biblioteca</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
