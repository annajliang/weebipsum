import React from "react";

const ParagraphInput = ({
  idName,
  textContent,
  getInputData,
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
        onClick={(e) => {
          getInputData(e, setParagraphType);
        }}
        required
      />
      <label htmlFor={idName}>{textContent}</label>
    </>
  );
};

export default ParagraphInput;
