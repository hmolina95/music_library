import React from 'react';
import Song from '../Song/song';
import Styles from '../Library/styles.css';

const Library = ({ songs }) => {
    return (
        <div>
            <h2>Mi Biblioteca</h2>
            <div className="song-list">
                {songs.map(song => (
                    <Song 
                    key={song.id}
                    title={song.title}
                    artist={song.artist}
                    duration={song.duration}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;