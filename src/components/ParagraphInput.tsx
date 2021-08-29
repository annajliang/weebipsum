import React from "react";

const ParagraphInput = ({
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
        onClick={(e) => setParagraphType(e.target.value)}
        required
      />
      <label htmlFor={idName}>{textContent}</label>
    </>
  );
};

export default ParagraphInput;
