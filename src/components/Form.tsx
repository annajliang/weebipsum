import React, { useState } from "react";
import ParagraphInput from "./ParagraphInput";
import WordChoice from "./WordChoice";
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

export const SubmitBtn = styled.button`
  display: block;
  margin: 2rem auto 0;
  /* background-color: transparent; */
  background-color: #f26663;
  font: 600 2.5rem "Action Man" !important;
  /* border: 2px solid #31302c; */
  border: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  position: relative;
  z-index: 1;
  /* box-shadow: 5px 5px #31302c; */
  /* border-bottom-right-radius: 0;
  border-bottom-left-radius: 0; */
  color: #fff;
  box-shadow: 0px 8px 0px 0px #DE2828;

  /* &:after {
    content: "";
    display: block;
    height: 0.9rem;
    width: 100%;
    background-image: repeating-linear-gradient(
      45deg,
      #31302c,
      #31302c 1px,
      transparent 2px,
      transparent 6px
    );
    border: 2px solid #31302c;
    position: absolute;
    left: -2px;
    bottom: -13px;
    z-index: -1;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  } */
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
    return userInputs.startWithOmae ? `Omae wa mou shindeiru ${paragraph}` : paragraph;
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

          <ParagraphInput
            numOfSentencesInParagraph="7"
            idName="longParagraph"
            textContent="Long"
            handleClick={handleClick}
          />
          <ParagraphInput
            numOfSentencesInParagraph="5"
            idName="medParagraph"
            textContent="Medium"
            handleClick={handleClick}
          />
          <ParagraphInput
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
          <WordChoice
            idName="cleanWords"
            textContent="Keep it PG!"
            handleWordChoice={handleWordChoice}
          />

          <WordChoice
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

        <SubmitBtn>Generate</SubmitBtn>
      </Section>
    </form>
  );
};

export default Form;
