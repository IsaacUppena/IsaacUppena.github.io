import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  input[type="text"], textarea {
    border: 3px solid var(--container);
    outline: none;
    border-radius: 5px;
    padding: 10px;
    caret-color: var(--text-primary);
    background-color: var(--container);
    color: var(--text-primary);
    width: 100%;
    transition: all ease-in 0.1s;
    font-family: inherit;
    font-size: inherit;
  }

  input[type="text"]:focus, textarea:focus {
    border: 3px solid var(--text-primary);
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
`;

export default GlobalStyle;
