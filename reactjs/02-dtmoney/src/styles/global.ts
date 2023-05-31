import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --blue: #633BBC;
    --green: #33cc95;
    --red: #e62e4d;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;

    --background: #f0f2f5;
    --background-black: #1e1e1e;
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
    background: var(--background-black);
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
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    border: none;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.5)
    }
  }
`
