import React from "react";
import { Section, Inputs } from "../Form";

const OptionalText: React.FC<{ handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ handleChange }) => {
    return (
      <Section>
        <h3>A Little Something Extra</h3>
        <Inputs>
          <input
            type="checkbox"
            id="startWithOmae"
            name="startWithOmae"
            onChange={handleChange}
          />
          <label htmlFor="startWithOmae">
            Start with "Omae wa mou shindeiru..."
          </label>
        </Inputs>
      </Section>
    );
}

export default OptionalText;