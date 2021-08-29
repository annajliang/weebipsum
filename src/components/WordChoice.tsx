import React from "react";

interface Props {
  idName: string,
  setIncludeCleanWords: (bool: boolean) => void,
  setIncludeDirtyWords: (bool: boolean) => void,
  textContent: string,
}

const WordChoice: React.FC<Props> = ({idName, setIncludeCleanWords, setIncludeDirtyWords, textContent}) => {
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
