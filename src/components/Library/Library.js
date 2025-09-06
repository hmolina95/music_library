import React from 'react';
import Song from '../Song/song';
import {  AddedSongsCard, LibraryContainer, LibraryTitle, RemoveButton } from '../../Themes/Library';
import { useDispatch, useSelector } from 'react-redux';
import { removeSong } from '../../redux/libraryAction';

const Library = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs);

    const handleRemoveSong = (id) => {
        dispatch(removeSong(id));
    }

    return (
        <LibraryContainer>
            <LibraryTitle>Mi Biblioteca</LibraryTitle>
            <div>
                {songs && songs.map(song => (
                    <AddedSongsCard key={song.id}>
                        <Song 
                        title={song.title}
                        artist={song.artist}
                        duration={song.duration}
                        inLibrary={true}
                        />
                        <RemoveButton onClick={ () => handleRemoveSong(song.id)}>Remover</RemoveButton>
                    </AddedSongsCard>
                ))}
            </div>
        </LibraryContainer>
    );
};

export default Library;