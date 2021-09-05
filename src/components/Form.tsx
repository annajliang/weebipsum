import React from "react";
import cleanWords from "../data/cleanWords";
import dirtyWords from "../data/dirtyWords";
import { getRandomIndex } from "../utils/randomizer";
import {
  capitalizeFirstLetter,
  removeExtraPunctuations,
} from "../utils/stringFormatters";
import styled from "styled-components";
import { UserChoices as Props } from "../App";
import { Btn } from "../utils/styles";
import ParagraphOptions from "./sections/ParagraphOptions";
import WordChoices from "./sections/WordChoices";
import OptionalText from "./sections/OptionalText";

export const Section = styled.div`
  margin: 3.5rem 0;
`;

export const InputContainer = styled.div`
  display: inline;

  &:not(:last-child) {
    padding-right: 2rem;

    @media (max-width: 580px) {
      padding-right: 0;
      padding-bottom: 1rem;
    }
  }

  @media (max-width: 580px) {
    display: block;
  }
`;

export const Inputs = styled.div`
  & input {
    margin-right: 0.5rem;
  }
`;

const GenerateBtn = styled(Btn)`
  color: var(--white);
  box-shadow: 0px 8px 0px 0px var(--red-shadow);
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

    paragraph = paragraph.split(".").join(". ");
    return userInputs.startWithOmae
      ? `Omae wa mou shindeiru. ${paragraph[0]}${paragraph.slice(1)} `
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
    <section>
      <form action="submit" onSubmit={showResultOnSubmit}>
        <ParagraphOptions
          userInputs={userInputs}
          handleClick={handleClick}
          handleChange={handleChange}
        />

        <WordChoices handleWordChoice={handleWordChoice} />

        <OptionalText handleChange={handleChange} />

        <Section>
          <GenerateBtn generate>Generate</GenerateBtn>
        </Section>
      </form>
    </section>
  );
};

export default Form;
