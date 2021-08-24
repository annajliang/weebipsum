import React, { useState, useEffect } from "react";

const ParagraphInput = ({
  idName,
  textContent,
  getInputData,
  setParagraphType,
  numOfSentencesInParagraph
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
      />
      <label for="longParagraph">{textContent}</label>
    </>
  );
};

export default ParagraphInput;
