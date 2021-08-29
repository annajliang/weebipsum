import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [userResult, setUserResult] = useState<string>("Your Result");

  return (
    <div className="App">
      <h1>Weebipsum</h1>
      <Form setUserResult={setUserResult} />
      <div className="new-line">
        <p>{userResult}</p>
      </div>
    </div>
  );
}

export default App;
