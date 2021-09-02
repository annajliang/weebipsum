import React from "react";
import { InputContainer } from "../Form";

interface Props {
  idName: string;
  textContent: string,
  handleWordChoice: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
}

const WordChoice: React.FC<Props> = ({idName, textContent, handleWordChoice}) => {
  return (
    <InputContainer>
      <input
        type="radio"
        id={idName}
        name="wordType"
        value={idName}
        onClick={handleWordChoice}
        required
      />
      <label htmlFor={idName}>{textContent}</label>
    </InputContainer>
  );
};

export default WordChoice;
