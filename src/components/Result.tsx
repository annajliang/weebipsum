import React from "react";
import styled from "styled-components";
import { Btn } from "../utils/styles";

const ResultContainer = styled.div`
    position: relative;
    margin-bottom: 2rem;
`

const ResultCopy = styled.p`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%2331302c33' stroke-width='3' stroke-dasharray='8%2c 10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  min-height: 11rem;
  padding: 2rem;
  border-radius: 6px;
  text-align: left;
`;

const CopyBtn = styled(Btn)`
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 14px);

  &:after {
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
  }
`;

const Result: React.FC<{result: string}> = ({ result }) => {
    return (
      <ResultContainer>
        <h3>Your Result Below</h3>
        <ResultCopy>{result}</ResultCopy>
        <CopyBtn
          onClick={() => {
            navigator.clipboard.writeText(result);
          }}
        >
          Click to Copy
        </CopyBtn>
      </ResultContainer>
    );
}

export default Result;
