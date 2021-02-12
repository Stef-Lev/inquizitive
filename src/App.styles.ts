import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './images/mountains.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`