import React from "react";
import { InputContainer } from "../Form";
import { CustomLabel, CustomRadio } from "./ParagraphTypeInput";

interface Props {
  idName: string;
  textContent: string,
  handleWordChoice: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
}

const WordChoice: React.FC<Props> = ({idName, textContent, handleWordChoice}) => {
  return (
    <InputContainer>
      <CustomLabel htmlFor={idName} className="container">
        {textContent}
        <input
          type="radio"
          id={idName}
          name="wordType"
          value={idName}
          onClick={handleWordChoice}
          required
        />
        <CustomRadio className="radio"></CustomRadio>
      </CustomLabel>
    </InputContainer>
  );
};

export default WordChoice;
