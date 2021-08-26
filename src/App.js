import './App.css';
import { useState } from "react";
import Form from './components/Form'

function App() {
  const [userResult, setUserResult] = useState('test')
  const [results, setResults] = useState({paragraphLength: 0, paragraphSize: 0})

  return (
    <div className="App">
      <h1>Weebipsum</h1>
      <Form
        results={results}
        setResults={setResults}
        userResult={userResult}
        setUserResult={setUserResult}
      />
      <div className="new-line">
        <p>{userResult}</p>
      </div>
    </div>
  );
}

export default App;
