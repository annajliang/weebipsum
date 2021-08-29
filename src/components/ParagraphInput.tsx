import React from "react";

interface Props {
  idName: string;
  textContent: string;
  setParagraphType: (text: string) => void;
  numOfSentencesInParagraph: string,
}

const ParagraphInput: React.FC<Props> = ({
  idName,
  textContent,
  setParagraphType,
  numOfSentencesInParagraph,
}) => {
  return (
    <>
      <input
        type="radio"
        id={idName}
        name="paragraphType"
        value={numOfSentencesInParagraph}
        onClick={(e) => setParagraphType(e.currentTarget.value)}
        required
      />
      <label htmlFor={idName}>{textContent}</label>
    </>
  );
};

export default ParagraphInput;
