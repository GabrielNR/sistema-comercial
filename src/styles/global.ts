import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html { 
      font-size: 96.75%
    }
}

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 620px) {
    html {
      font-size: 80%;
    }
  }

  @media (max-width: 520px) {
    html {
      font-size: 75%;
    }
  }

  @media (max-width: 420px) {
    html {
      font-size: 65%;
    }
  }

  @media (max-width: 420px) {
    html {
      font-size: 62.5%;
    }
  }

  body {
    background: #F5F8FA;
    color: #123952;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`