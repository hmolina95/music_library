import React, { useState } from 'react';
import { SearchBarButton, SearchBarContainer, SearchInput } from '../../Themes/SearchBar';

const SearchBar = ({ onSearch }) => {
    const [artist, setArtist] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (artist.trim() === '') return;
        onSearch(artist.trim());
    };

    return (
        <SearchBarContainer>
            <form onSubmit={handleSubmit}>
                <SearchInput
                    type="text"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    placeholder="Buscar artista..."
                />
                <SearchBarButton type="submit">Buscar</SearchBarButton>
            </form>
        </SearchBarContainer>
    );
};

export default SearchBar;
