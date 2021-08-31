import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import title from "./assets/weebipsum-h1.svg";
import { Wrapper } from "./utils/styles";
import Result from "./components/Result";

const Main = styled.main`
  background-color: #fff;
  border-radius: 50px;
  padding: 4rem;
  position: relative;
  width: 62rem;
  margin: 0 auto;
  border: 2px solid #31302c;
  border-top: none;

  &:after {
    content: "";
    position: absolute;
    width: 102%;
    min-height: 100%;
    top: 5px;
    left: 2px;
    bottom: -15px;
    background-image: repeating-linear-gradient(
      45deg,
      #31302c,
      #31302c 1px,
      transparent 2px,
      transparent 10px
    );
    border-radius: 50px;
    border: 2px solid #31302c;
    z-index: -1;
    background-color: white;
  }
`;
const Subtitle = styled.div`
  background-color: #453a94;
  height: 5rem;
  border-radius: 50px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: absolute;
  top: 0;
  right: -2px;
  left: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #31302c;
`;

const Hero = styled.div`
  & img {
    width: 50rem;
    margin-top: 4rem;
  }
`;

export interface UserChoices {
  numParagraphs: number;
  paragraphType: string;
  cleanWords: boolean;
  dirtyWords: boolean;
  startWithOmae: boolean;
};

function App() {
  const [userInputs, setUserInputs] = useState({
    numParagraphs: 0,
    paragraphType: "",
    cleanWords: true,
    dirtyWords: false,
    startWithOmae: false,
  });

  const [result, setResult] = useState<string>(
    "Click the generate button above and let the secondhand embarrassment begin!"
  );

  return (
    <div className="App">
      <Hero>
        <img src={animeGirl} alt="" />
      </Hero>
      <Wrapper>
        <header>
          <h1>
            <img src={title} alt="Weebipsum"></img>
          </h1>
        </header>
        <Main className="new-line">
          <Subtitle>
            <h2>Add a Dash of Cringe to Your Designs</h2>
          </Subtitle>
          <Form
            userInputs={userInputs}
            setUserInputs={setUserInputs}
            setResult={setResult}
          />
          <Result result={result} />
        </Main>
      </Wrapper>
    </div>
  );
}

export default App;
