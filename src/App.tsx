import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import title from "./assets/weebipsum-h1.svg";
import animeGirl from "./assets/animeGirl.png";
import { Wrapper } from "./utils/wrapper";
import { SubmitBtn } from "./components/Form";

const Main = styled.main`
  background-color: #fff;
  border-radius: 50px;
  /* height: 600px; */
  padding: 4rem;
  position: relative;
  width: 62rem;
  margin: 0 auto;
  /* box-shadow: 5px 5px #31302c; */
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
  /* border-bottom: 2px solid #31302c; */
  border: 2px solid #31302c;
`;

const CopyBtn = styled(SubmitBtn)`
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 15px);
  position: absolute;
  left: 50%;
  transform: translate(-50%, 15px);
`;

const Hero = styled.div`
  & img {
    width: 50rem;
    margin-top: 4rem;
  }
`;

const ResultCopy = styled.p`
  /* border: 1px rgba(49, 48, 44, 0.2) dashed; */
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%2331302c33' stroke-width='3' stroke-dasharray='8%2c 10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  min-height: 11rem;
  padding: 2rem;
  border-radius: 6px;
  text-align: left;
`;

const ResultContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
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
          <ResultContainer>
            <h3>Your Result Below</h3>
            <ResultCopy>{result}</ResultCopy>
            <CopyBtn
              onClick={() => {
                navigator.clipboard.writeText(result);
              }}
            >
              Click to Copy
            </CopyBtn>
          </ResultContainer>
        </Main>
      </Wrapper>
    </div>
  );
}

export default App;
