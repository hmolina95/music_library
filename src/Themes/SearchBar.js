import styled from "styled-components";

const SearchBarContainer = styled.div `
    margin: 20px 20px;
`
const SearchInput = styled.input `
    padding: 4px 4px;
    border-radius: 5px;
    border: 1px solid;
    border-color: #A9A9A9;
`


const SearchBarButton = styled.button `
    background-color: ${props => props.theme.colors.light};
    color: #FAF9F6;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 5px 10px;
    margin-left: 10px;
    font-weight: ${props=> props.theme.fonts.mdWeight};
    font-size: 0.9rem;
    cursor: pointer;
`

export {
    SearchBarButton,
    SearchBarContainer,
    SearchInput
}
