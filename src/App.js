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
        <TopFader />
        <BottomFader />
      </Content>
    </RootContainer>
  );
}

const Content = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 2300px) {
    max-width: 50%;
  }
  max-width: 80%;
`;

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  @media (min-width: 1024px) {
    padding: 100px 0;
    width: 70%;
  }
`;

const TopFader = styled.div`
  @media (min-width: 800px) {
    position: fixed;
    width: 100%;
    height: 100px;
    background: linear-gradient(180deg, var(--background) 0%, #11112200 100%);
    top: 0;
  }
`;

const BottomFader = styled.div`
  @media (min-width: 800px) {
    position: fixed;
    width: 100%;
    height: 200px;
    background: linear-gradient(0deg, var(--background) 20%, #11112200 100%);
    bottom: 0;
  }
`;

export default App;
