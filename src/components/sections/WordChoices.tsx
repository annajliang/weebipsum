import React from "react";
import RadioInput from "../inputs/RadioInput";
import { Section, Inputs } from "../Form";

interface Props {
    handleWordChoice: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

const WordChoices: React.FC<Props> = ({ handleWordChoice }) => {
  return (
    <Section>
      <h3>Select Choice of Words</h3>
      <Inputs>
        <RadioInput
          idName="cleanWords"
          textContent="Keep it PG!"
          handleWordChoice={handleWordChoice}
        />

        <RadioInput
          idName="dirtyWords"
          textContent="Sprinkle in some naughty words!"
          handleWordChoice={handleWordChoice}
        />
      </Inputs>
    </Section>
  );
};

export default WordChoices;