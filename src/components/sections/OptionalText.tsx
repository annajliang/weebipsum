import React from "react";
import { Section, Inputs } from "../Form";
import { CustomLabel } from "../inputs/RadioInput";
import styled from "styled-components";

const CustomCheckmark = styled.span`
  /* Create a custom checkbox */
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #ccc;

  &:after {
    /* Create the checkmark/indicator (hidden when not checked) */
    content: "";
    position: absolute;
    display: none;

    /* Style the checkmark/indicator */
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid var(--red);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const OptionalText: React.FC<{ handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ handleChange }) => {
    return (
      <Section>
        <h3>A Little Something Extra</h3>
        <Inputs>
          <CustomLabel htmlFor="startWithOmae" className="container">
            Start with "Omae wa mou shindeiru..."
            <input
              type="checkbox"
              id="startWithOmae"
              name="startWithOmae"
              onChange={handleChange}
            />
            <CustomCheckmark className="checkmark"></CustomCheckmark>
          </CustomLabel>
        </Inputs>
      </Section>
    );
}

export default OptionalText;