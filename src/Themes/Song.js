import styled from "styled-components";

const SongContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #44403B;
`
const SongTitle = styled.h3 `
    font-weight: ${props => props.theme.fonts.lgWeight};
    color: ${props => props.inLibrary ? '#5D3FD3' : '#171717'};
`

export {
    SongContainer,
    SongTitle
}
