import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F0F0;
        --light-dark: #757587;
        --green: #6202EC;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialized;
    }

    label, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
