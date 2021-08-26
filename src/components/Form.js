import React, { useState } from "react";
import ParagraphInput from "./ParagraphInput";
import cleanWords from "../data/cleanWords"
import { getRandomIndex } from "../utils/randomizer"
import { applySentenceCase, capitalizeFirstLetter } from "../utils/stringFormatters"

const Form = ({ results, setResults, userResult, setUserResult }) => {
  //   const [randomIndex, setRandomIndex] = useState(null);
  //   const [randomWord, setRandomWord] = useState("");
  const [numOfParagraphs, setNumOfParagraphs] = useState(0);
  const [paragraphType, setParagraphType] = useState("");
  const [startWith, setStartWith] = useState(false);
  const [test, setTest] = useState([])

  const getRandomIndex = () => {
    return Math.floor(Math.random() * cleanWords.length);
  };

  const handleCheck = (e) => {
    setStartWith(e.target.checked)
  }

  const constructSentence = (arr) => {
    let sentence = "";
    for (let i = 1; i <= 15; i++) {
      sentence += ` ${arr[getRandomIndex(arr)]}`;
    }
    return `${sentence}.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults({
      paragraphLength: numOfParagraphs,
      paragraphSize: paragraphType,
    });

    setUserResult(constructAllParagraphs(numOfParagraphs));
  };
  

  const getInputData = (e, setStateName) => {
    setStateName(e.target.value);
  };

    const constructSingleParagraph = (paraSize) => {
      let paragraph = "";
      for (let i = 1; i <= paraSize; i++) {
        paragraph += constructSentence(cleanWords);
      }
      return `${paragraph}\n\n`;
    };

  const constructAllParagraphs = (length) => {
    let paragraph = "";
    for (let i = 1; i <= length; i++) {
      paragraph += constructSingleParagraph(paragraphType);
    }
    return startWith ? 'Omae wa mou shindeiru' + paragraph : paragraph;
  };

  console.log("check", startWith);
  console.log('test',test);
  console.log(results);
  console.log("paragraph", userResult);
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        type="number"
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

      <input type="checkbox" id="startWith" name="startWith" onChange={handleCheck} />
      <label for="shortText">Start with 'Omae wa mou shindeiru...</label>
      <br></br>

      <input type="submit" value="いきましょう! (Let's Go!)" />
    </form>
  );
};

export default Form;
