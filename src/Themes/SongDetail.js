import styled from "styled-components";

const SongDetailContainer = styled.div `
    display: flex;   
    justify-content: flex-start;
    flex-direction: column;
    margin: 20px 10px 0 10px;
    padding: 20px 10px;
    margin-bottom: 20px;
    gap: 10px;
    background-color: #F5F3FF;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    border: 1px solid ${props => props.theme.colors.dark};
`
export {
    SongDetailContainer
}