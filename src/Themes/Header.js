import styled from "styled-components";

const HeaderApp = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 30px;
    background-color: ${props => props.theme.colors.dark};
    color: #FAF9F6;
    box-sizing: border-box;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.95);
`
const AppTitle = styled.h1 `
    font-weight: ${props=> props.theme.fonts.mdWeight};
    font-size: 20px;
    text-shadow: 
        -1px -1px 0 #555,
        1px -1px 0 #555,
        -1px 1px 0 #555,
        1px 1px 0 #555,
        4px 4px 8px rgba(0, 0, 0, 0.5);
`



export {
    HeaderApp,
    AppTitle,
}