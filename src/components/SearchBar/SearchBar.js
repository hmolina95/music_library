import React, { useState } from 'react';
import Styles from './styles.css';

const SearchBar = ({ onSearch }) => {
    const [artist, setArtist] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (artist.trim() === '') return;
        onSearch(artist.trim());
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="Buscar artista..."
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar;
