import React from "react";

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
      <input
        type="radio"
        id={idName}
        name="paragraphType"
        value={numOfSentencesInParagraph}
        onClick={handleClick}
        required
      />
      <label htmlFor={idName}>{textContent}</label>
    </>
  );
};

export default ParagraphTypeInput;
