import { Link } from 'react-router-dom';
import React from 'react';
import Song from '../Song/song';
import { Button, ResultsCard, ResultsContainer, ResultsTitle } from '../../Themes/SearchResults';
import { SearchBarButton } from '../../Themes/SearchBar';

const SearchResults = ({ songs, onAddToLibrary }) => {
    return (
        <ResultsContainer>
            <ResultsTitle>Resultados de búsqueda</ResultsTitle>
            <div>
                {songs.map(song => (
                    <ResultsCard key={song.id} className="search-song">
                        <Link to={`/song/${song.id}`} className="song-link">
                            <Song
                                title={song.title}
                                artist={song.artist}
                                duration={song.duration}
                            />
                        </Link>
                        <Button onClick={() => onAddToLibrary(song)}>Agregar a mi biblioteca</Button>
                    </ResultsCard>
                ))}
            </div>
        </ResultsContainer>
    );
};

export default SearchResults;
