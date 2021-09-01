import React from "react";
import { Section, InputContainer } from "../Form";

const OptionalText: React.FC<{ handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ handleChange }) => {
    return (
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
      </Section>
    );
}

export default OptionalText;