import React from "react";
import { InputContainer } from "../Form";

interface Props {
  idName: string;
  textContent: string;
  numOfSentencesInParagraph: string;
  handleClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const ParagraphTypeInput: React.FC<Props> = ({
  idName,
  textContent,
  numOfSentencesInParagraph,
  handleClick,
}) => {
  return (
    <>
      <InputContainer>
        <input
          type="radio"
          id={idName}
          name="paragraphType"
          value={numOfSentencesInParagraph}
          onClick={handleClick}
          required
        />
        <label htmlFor={idName}>{textContent}</label>
      </InputContainer>
    </>
  );
};

export default ParagraphTypeInput;
