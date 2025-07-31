import React from 'react';
import Song from '../Song/song';
import {  AddedSongsCard, LibraryContainer, LibraryTitle } from '../../Themes/Library';

const Library = ({ songs }) => {
    return (
        <LibraryContainer>
            <LibraryTitle>Mi Biblioteca</LibraryTitle>
            <div>
                {songs.map(song => (
                    <AddedSongsCard>
                        <Song 
                        key={song.id}
                        title={song.title}
                        artist={song.artist}
                        duration={song.duration}
                        inLibrary={true}
                        />
                    </AddedSongsCard>
                ))}
            </div>
        </LibraryContainer>
    );
};

export default Library;