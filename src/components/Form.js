import React, { useState } from "react";
import ParagraphInput from "./ParagraphInput";
import WordChoice from "./WordChoice";
import cleanWords from "../data/cleanWords"
import dirtyWords from "../data/dirtyWords";
import { getRandomIndex } from "../utils/randomizer"
import { applySentenceCase, capitalizeFirstLetter } from "../utils/stringFormatters"


const Form = ({ setUserResult }) => {
  const [numOfParagraphs, setNumOfParagraphs] = useState(0);
  const [paragraphType, setParagraphType] = useState("");
  const [startWith, setStartWith] = useState(false);
  const [includeCleanWords, setIncludeCleanWords] = useState(true);
  const [includeDirtyWords, setIncludeDirtyWords] = useState(false);

  const handleCheck = (e) => {
    setStartWith(e.target.checked)
  }

  const constructSentence = (arr) => {
    let sentence = "";
    
    for (let i = 1; i <= 15; i++) {
      sentence += ` ${arr[getRandomIndex(arr)]}`;
    }

    sentence = capitalizeFirstLetter(sentence);
    return `${sentence}.`
  };

  const showResultOnSubmit = (e) => {
    e.preventDefault();
    
    includeCleanWords && !includeDirtyWords
      ? setUserResult(constructAllParagraphs(numOfParagraphs, cleanWords))
      : setUserResult(constructAllParagraphs(numOfParagraphs, cleanWords.concat(dirtyWords)));
  };
  

  const getInputData = (e, setStateName) => {
    setStateName(e.target.value);
  };

    const constructSingleParagraph = (paraSize, arr) => {
      let paragraph = "";
      for (let i = 1; i <= paraSize; i++) {
        paragraph += constructSentence(arr);
      }
      return `${paragraph}\n\n`;
    };

  const constructAllParagraphs = (length, arr) => {
    let paragraph = "";
    for (let i = 1; i <= length; i++) {
      paragraph += constructSingleParagraph(paragraphType, arr);
    }

    paragraph = applySentenceCase(paragraph).split(".").join(". ");
    return startWith ? `Omae wa mou shindeiru ${paragraph}` : paragraph;
  };

  return (
    <form action="submit" onSubmit={showResultOnSubmit}>
      <input
        type="number"
        id="numOfParagraphs"
        min="1"
        max="20"
        value={numOfParagraphs}
        onChange={(e) => {
          getInputData(e, setNumOfParagraphs);
        }}
      />
      <label htmlFor="numOfParagraphs"> Paragraphs</label>
      <br></br>

      <ParagraphInput
        getInputData={getInputData}
        setParagraphType={setParagraphType}
        numOfSentencesInParagraph="7"
        idName="longParagraph"
        textContent="Long"
      />
      <ParagraphInput
        getInputData={getInputData}
        setParagraphType={setParagraphType}
        numOfSentencesInParagraph="5"
        idName="medParagraph"
        textContent="Medium"
      />
      <ParagraphInput
        getInputData={getInputData}
        setParagraphType={setParagraphType}
        numOfSentencesInParagraph="3"
        idName="smallParagraph"
        textContent="Small"
      />

      <WordChoice
        idName="cleanWords"
        setIncludeCleanWords={setIncludeCleanWords}
        setIncludeDirtyWords={setIncludeDirtyWords}
        textContent="Keep it PG!"
      />

      <WordChoice
        idName="dirtyWords"
        setIncludeCleanWords={setIncludeCleanWords}
        setIncludeDirtyWords={setIncludeDirtyWords}
        textContent="Sprinkle in some naughty words!"
      />

      <input
        type="checkbox"
        id="startWith"
        name="startWith"
        onChange={handleCheck}
      />
      <label htmlFor="startWith">Start with 'Omae wa mou shindeiru...</label>
      <br></br>

      <input type="submit" value="いきましょう! (Let's Go!)" />
    </form>
  );
};

export default Form;
