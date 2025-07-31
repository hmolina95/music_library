import React from 'react';
import { SongContainer, SongTitle } from '../../Themes/Song';

const Song = ({ title, artist, duration, inLibrary }) => {
    return (
        <SongContainer>
            <SongTitle inLibrary={inLibrary}>{title}</SongTitle>
            <p>Artista: {artist}</p>
            <p>Duración: {duration}</p>
        </SongContainer>
    );
};

export default Song;