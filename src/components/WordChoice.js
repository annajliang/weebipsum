import React from "react";

const WordChoice = ({
  idName,
  setIncludeCleanWords,
  setIncludeDirtyWords,
  textContent
}) => {
  return (
    <>
      <input
        type="radio"
        id={idName}
        name="wordType"
        value={idName}
        onClick={() => {
          if (idName === "cleanWords") {
            setIncludeCleanWords(true);
            setIncludeDirtyWords(false);
          } else {
            setIncludeDirtyWords(true);
            setIncludeCleanWords(true);
          }
        }}
        required
      />
      <label htmlFor={idName}>{textContent}</label>
    </>
  );
};

export default WordChoice;