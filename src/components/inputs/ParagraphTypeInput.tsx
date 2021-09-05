import React from "react";
import { InputContainer } from "../Form";
import styled from "styled-components";

interface Props {
  idName: string;
  textContent: string;
  numOfSentencesInParagraph: string;
  handleClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export const CustomLabel = styled.label`
  /* Customize the label (the container) */
  position: relative;
  padding-left: 26px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default radio button */
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Show the indicator (dot/circle) when checked */
  /* Show the checkmark when checked */
  & input:checked ~ .radio:after,
  input:checked ~ .checkmark:after {
    display: block;
  }
`;

export const CustomRadio = styled.span`
  /* Create a custom radio button */
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;

  &:after {
    /* Create the indicator (the dot/circle - hidden when not checked) */
    content: "";
    position: absolute;
    display: none;

    /* Style the indicator (dot/circle) */
    top: 3px;
    left: 3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--red);
  }
`;

const ParagraphTypeInput: React.FC<Props> = ({
  idName,
  textContent,
  numOfSentencesInParagraph,
  handleClick,
}) => {
  return (
    <>
      <InputContainer>
        <CustomLabel htmlFor={idName} className="container">
          {textContent}
          <input
            type="radio"
            id={idName}
            name="paragraphType"
            value={numOfSentencesInParagraph}
            onClick={handleClick}
            defaultChecked={textContent === "Long" ? true : false}
          />
          <CustomRadio className="radio"></CustomRadio>
        </CustomLabel>
      </InputContainer>
    </>
  );
};

export default ParagraphTypeInput;