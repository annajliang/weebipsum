import React from "react";
import ParaTypeInput from "./ParaTypeInput";
import WordChoiceInput from "./WordChoiceInput";
import cleanWords from "../data/cleanWords";
import dirtyWords from "../data/dirtyWords";
import { getRandomIndex } from "../utils/randomizer";
import {
  applySentenceCase,
  capitalizeFirstLetter,
  removeExtraPunctuations,
} from "../utils/stringFormatters";
import styled from "styled-components";
import { UserChoices as Props } from "../App";
import { Btn } from "../utils/styles";

const Section = styled.section`
  margin: 3.5rem 0;
`

const InputContainer = styled.div`
  display: inline;

  & input {
    margin-right: .5rem;
  }

  & label:not(:last-child) {
    padding-right: 2rem;
  }
`;

const GenerateBtn = styled(Btn)`
  color: #fff;
  box-shadow: 0px 8px 0px 0px #de2828;
`;

const Form: React.FC<{
  userInputs: Props;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  setUserInputs: React.Dispatch<React.SetStateAction<Props>>;
}> = ({ userInputs, setUserInputs, setResult }) => {

  const constructSentence = (arr: string[]): string => {
    let sentence = "";

    for (let i = 1; i <= 15; i++) {
      sentence += ` ${arr[getRandomIndex(arr)]}`;
    }

    sentence = capitalizeFirstLetter(sentence);
    return `${sentence}.`;
  };

  const showResultOnSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const InputsForCleanWords = removeExtraPunctuations(
      constructAllParagraphs(userInputs.numParagraphs, cleanWords)
    );
    const InputsForCleanAndDirtyWords = removeExtraPunctuations(
      constructAllParagraphs(
        userInputs.numParagraphs,
        cleanWords.concat(dirtyWords)
      )
    );

    userInputs.cleanWords && !userInputs.dirtyWords
      ? setResult(InputsForCleanWords)
      : setResult(InputsForCleanAndDirtyWords);
  };

  const constructSingleParagraph = (
    paraSize: number | string,
    arr: string[]
  ): string => {
    let paragraph = "";
    for (let i = 1; i <= paraSize; i++) {
      paragraph += constructSentence(arr);
    }
    return `${paragraph}\n\n`;
  };

  const constructAllParagraphs = (
    length: number | string,
    arr: string[]
  ): string => {
    let paragraph = "";
    for (let i = 1; i <= length; i++) {
      paragraph += constructSingleParagraph(userInputs.paragraphType, arr);
    }

    paragraph = applySentenceCase(paragraph).split(".").join(". ");
    return userInputs.startWithOmae
      ? `Omae wa mou shindeiru ${paragraph[0].toLowerCase()}${paragraph.slice(1)} `
      : paragraph;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "numParagraphs") {
     setUserInputs({
       ...userInputs,
       [e.target.id]: parseInt(e.target.value),
     });
    } 
    
    if (e.target.id === "startWithOmae") {
       setUserInputs({
         ...userInputs,
         [e.target.id]: e.target.checked,
       });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setUserInputs({
      ...userInputs,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleWordChoice = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (e.currentTarget.id === "cleanWords") {
      setUserInputs({
        ...userInputs,
        [e.currentTarget.id]: true,
        "dirtyWords": false,
      })
    } else {
      setUserInputs({
        ...userInputs,
        "cleanWords": true,
        [e.currentTarget.id]: true,
      });
    }
  };

  return (
    <form action="submit" onSubmit={showResultOnSubmit}>
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

          <ParaTypeInput
            numOfSentencesInParagraph="7"
            idName="longParagraph"
            textContent="Long"
            handleClick={handleClick}
          />
          <ParaTypeInput
            numOfSentencesInParagraph="5"
            idName="medParagraph"
            textContent="Medium"
            handleClick={handleClick}
          />
          <ParaTypeInput
            numOfSentencesInParagraph="3"
            idName="smallParagraph"
            textContent="Small"
            handleClick={handleClick}
          />
        </InputContainer>
      </Section>

      <Section>
        <h3>Select Choice of Words</h3>
        <InputContainer>
          <WordChoiceInput
            idName="cleanWords"
            textContent="Keep it PG!"
            handleWordChoice={handleWordChoice}
          />

          <WordChoiceInput
            idName="dirtyWords"
            textContent="Sprinkle in some naughty words!"
            handleWordChoice={handleWordChoice}
          />
        </InputContainer>
      </Section>

      <Section>
        <h3>A Little Something Extra</h3>
        <InputContainer>
          <input
            type="checkbox"
            id="startWithOmae"
            name="startWithOmae"
            onChange={handleChange}
          />
          <label htmlFor="startWithOmae">
            Start with "Omae wa mou shindeiru..."
          </label>
        </InputContainer>

        <GenerateBtn generate>Generate</GenerateBtn>
      </Section>
    </form>
  );
};

export default Form;
