import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

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

  const [result, setResult] = useState<string>('Result')

  return (
    <div className="App">
      <h1>Weebipsum</h1>
      <Form
        userInputs={userInputs}
        setUserInputs={setUserInputs}
        setResult={setResult}
      />
      <div className="new-line">
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
