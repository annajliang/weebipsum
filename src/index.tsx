import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Normalize from "./theme/normalize";
import GlobalStyles from "./theme/globalStyles";
import GlobalFonts from "./fonts/fonts";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyles />
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
