import React from "react";
import { Section, Inputs } from "../Form";
import RadioInput from "../inputs/RadioInput";
import { UserChoices } from "../../App";
import styled from "styled-components";

const ParagraphLenContainer = styled.div`
  padding-bottom: 1rem;

  & input[type="number"] {
    border-color: #ccc;
    border-width: 1px;
    border-style: solid;
    width: 45px;
  }
`;

interface Props {
  userInputs: UserChoices,
  handleClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ParagraphOptions: React.FC<Props> = ({ userInputs, handleClick, handleChange }) => {
    return (
      <Section>
        <h3>
          Select Paragraph Length <span className="noWrap">and Type</span>
        </h3>
        <Inputs>
          <ParagraphLenContainer>
            <input
              type="number"
              id="numParagraphs"
              min="1"
              max="20"
              value={userInputs.numParagraphs}
              onChange={handleChange}
            />
            <label htmlFor="numParagraphs"> Paragraphs</label>
          </ParagraphLenContainer>

          <RadioInput
            numOfSentencesInParagraph="7"
            idName="longParagraph"
            textContent="Long"
            handleClick={handleClick}
          />
          <RadioInput
            numOfSentencesInParagraph="5"
            idName="medParagraph"
            textContent="Medium"
            handleClick={handleClick}
          />
          <RadioInput
            numOfSentencesInParagraph="3"
            idName="smallParagraph"
            textContent="Small"
            handleClick={handleClick}
          />
        </Inputs>
      </Section>
    );
}

export default ParagraphOptions;