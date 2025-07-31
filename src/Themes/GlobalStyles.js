import { createGlobalStyle } from 'styled-components';
import reset from 'reset-css';

const GlobalStyle = createGlobalStyle `
    html {
        font-family: ${props => props.theme.fonts.base};
    }

    a {
        text-decoration: none;
    }

    ${reset}
`


export default GlobalStyle;