import React from 'react';
import Song from '../Song/song';
import Styles from '../SearchResults/styles.css';

const SearchResults = ( { songs, onAddToLibrary  }) => {
    return (
        <div>
            <h2>Resultados de búsqueda</h2>
            <div>
                {songs.map(song => (
                    <div key={song.id} className="search-song">
                        <Song 
                        key={song.id}
                        title={song.title}
                        artist={song.artist}
                        duration={song.duration}
                        />
                        <button onClick={() => onAddToLibrary(song)}>Agregar a mi biblioteca</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;