import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
        background: linear-gradient(0deg, rgba(71,135,164,1) 0%, rgba(0,96,140,1) 50%, rgba(15,61,82,1) 100%);
        margin: 0;
        padding: 0 20px;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    p {
      margin: 6px 0;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 16px;
  }
  h1 {
    font-family: 'Chango', cursive;
    background: #f1f2f6;
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0f3d52);
    font-size: 45px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background-color: #ff795e;
    color: #fff;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 100%;
  }

  sub {
    color: rgba(0, 0, 0, 0.75);
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid #003249;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 30px;
    }
  }
`;