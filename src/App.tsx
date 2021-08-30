import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

export interface UserChoices {
  numOfParagraphs: number;
  paragraphType: string;
  cleanWords: boolean;
  dirtyWords: boolean;
  startWithOmae: boolean;
};

function App() {
  const [userInputs, setUserInputs] = useState({
    numOfParagraphs: 0,
    paragraphType: "",
    cleanWords: true,
    dirtyWords: false,
    startWithOmae: false,
  });

  const [show, setShow] = useState<string>('Result')

  return (
    <div className="App">
      <h1>Weebipsum</h1>
      <Form
        userInputs={userInputs}
        setUserInputs={setUserInputs}
        setShow={setShow}
      />
      <div className="new-line">
        <p>{show}</p>
      </div>
    </div>
  );
}

export default App;
