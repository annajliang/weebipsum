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
import { UserChoices as Props } from "../App";

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
      <input
        type="number"
        id="numParagraphs"
        min="1"
        max="20"
        value={userInputs.numParagraphs}
        onChange={handleChange}
      />
      <label htmlFor="numParagraphs"> Paragraphs</label>
      <br></br>

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

      <input
        type="checkbox"
        id="startWithOmae"
        name="startWithOmae"
        onChange={handleChange}
      />
      <label htmlFor="startWithOmae">Start with 'Omae wa mou shindeiru...</label>
      <br></br>

      <input type="submit" value="いきましょう! (Let's Go!)" />
    </form>
  );
};

export default Form;
