import React from "react";
import { Section, InputContainer } from "../Form";
import ParagraphTypeInput from "../inputs/ParagraphTypeInput";
import { UserChoices } from "../../App";

interface Props {
  userInputs: UserChoices,
  handleClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ParagraphOptions: React.FC<Props> = ({ userInputs, handleClick, handleChange }) => {
    return (
      <Section>
        <h3>Select Paragraph Length and Type</h3>
        <InputContainer>
          <input
            type="number"
            id="numParagraphs"
            min="1"
            max="20"
            value={userInputs.numParagraphs}
            onChange={handleChange}
          />
          <label htmlFor="numParagraphs"> Paragraphs</label>

          <ParagraphTypeInput
            numOfSentencesInParagraph="7"
            idName="longParagraph"
            textContent="Long"
            handleClick={handleClick}
          />
          <ParagraphTypeInput
            numOfSentencesInParagraph="5"
            idName="medParagraph"
            textContent="Medium"
            handleClick={handleClick}
          />
          <ParagraphTypeInput
            numOfSentencesInParagraph="3"
            idName="smallParagraph"
            textContent="Small"
            handleClick={handleClick}
          />
        </InputContainer>
      </Section>
    );
}

export default ParagraphOptions;