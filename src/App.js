import "./App.css";
import GlobalStyle from "./theme/globalStyles";
import About from "./layout/About";
import Header from "./layout/Header";
import Experience from "./layout/Experience";
import { styled } from "styled-components";
import Contact from "./layout/Contact";

function App() {
  return (
    <RootContainer>
      <GlobalStyle />
      <Header />
      <Main>
        <About />
        <Experience />
        <Contact />
      </Main>
    </RootContainer>
  );
}

const RootContainer = styled.div`
  display: flex;
`;

const Main = styled.main`
  width: 50%;
  padding: 100px 0;
`;

export default App;
