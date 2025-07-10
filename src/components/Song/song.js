import React from 'react';
import Styles from '../Song/styles.css';

const Song = ({ title, artist, duration }) => {
    return (
        <div className="song">
            <h3>{title}</h3>
            <p>Artista: {artist}</p>
            <p>Duración: {duration}</p>
        </div>
    );
};

export default Song;