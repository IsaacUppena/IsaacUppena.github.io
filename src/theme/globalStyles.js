import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  input[type="text"], textarea {
    border: 1px solid var(--container);
    outline: none;
    border-radius: 5px;
    padding: 10px;
    caret-color: var(--text-primary);
    background-color: var(--container);
    color: var(--text-primary);
    width: 100%;
    transition: all ease-in 0.1s;
  }

  input[type="text"]:focus, textarea:focus {
    border: 1px solid var(--primary);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px var(--foreground) inset !important;
  }

  input:-webkit-autofill{
    -webkit-text-fill-color: var(--text-primary) !important;
  }

  /* body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  } */
`;

export default GlobalStyle;
