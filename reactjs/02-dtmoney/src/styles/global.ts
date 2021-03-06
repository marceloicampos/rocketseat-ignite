import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --blue: #5429cc;
    --green: #33cc95;
    --red: #e62e4d;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;

    --background: #f0f2f5;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    // font-size: 16px; padrão para desktop
    @media (max-width: 1080px) {
      font-size: 93.75%;
      // é a mesma coisa de font-size: 15px;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
      // é a mesma coisa de font-size: 14px;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
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
