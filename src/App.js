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
      <Content>
        <GlobalStyle />
        <Header />
        <Main>
          <About />
          <Experience />
          <Contact />
        </Main>
      </Content>
    </RootContainer>
  );
}

const Content = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
  max-width: 80%;
`;

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  padding: 100px 0;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export default App;
