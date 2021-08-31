import React from "react";

interface Props {
  idName: string;
  textContent: string,
  handleWordChoice: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
}

const WordChoice: React.FC<Props> = ({idName, textContent, handleWordChoice}) => {
  return (
    <>
      <input
        type="radio"
        id={idName}
        name="wordType"
        value={idName}
        onClick={handleWordChoice}
        required
      />
      <label htmlFor={idName}>{textContent}</label>
    </>
  );
};

export default WordChoice;
