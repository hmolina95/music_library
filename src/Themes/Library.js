import styled from "styled-components";

const LibraryContainer = styled.div `
    display: flex;   
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 10px 0 10px;
    padding: 20px 10px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.background};
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
`

const LibraryTitle = styled.h2 `
    font-weight: ${props => props.theme.fonts.lgWeight};
    margin-bottom: 10px;
    color: ${props => props.theme.colors.dark};
`

const AddedSongsCard = styled.div `
    background-color: white;
    padding: 20px 10px;
    border: 1px solid ${props => props.theme.colors.dark};
    border-radius: 10px;
    margin-top: 10px;
`


export {
    LibraryContainer,
    LibraryTitle,
    AddedSongsCard
}