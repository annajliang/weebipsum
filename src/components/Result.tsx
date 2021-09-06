import React, { useState } from "react";
import styled from "styled-components";
import { Btn } from "../utils/styles";

const ResultContainer = styled.section`
    position: relative;
    margin-bottom: 2rem;
`

const ResultCopy = styled.p`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%2331302c33' stroke-width='3' stroke-dasharray='8%2c 10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  min-height: 11rem;
  padding: 2rem;
  border-radius: 6px;
  text-align: left;

  @media (max-width: 450px) {
    min-height: 15rem;
  }
`;

const CopyBtn = styled(Btn)`
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 14px);

  &:hover + div #toolTipText {
    visibility: visible;
    opacity: 1;
    font-size: 1.6rem;
  }

  &:after {
    content: "";
    display: block;
    height: 0.9rem;
    width: 100%;
    background-image: repeating-linear-gradient(
      45deg,
      var(--black),
      var(--black) 1px,
      transparent 2px,
      transparent 6px
    );
    border: 2px solid var(--black);
    position: absolute;
    left: -2px;
    bottom: -13px;
    z-index: -1;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  @media (max-width: 420px) {
    width: 125px;
  }
`;

const CopiedNotification = styled.div<{ showCopiedConfirmation: boolean }>`
  position: relative;

  & #toolTipText {
    visibility: ${(props) =>
      props.showCopiedConfirmation ? "visible" : "hidden"};
    width: 150px;
    background-color: var(--light-navy);
    color: var(--white);
    font-weight: 500;
    border-radius: 6px;
    padding: 7px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -36px);
    bottom: 0;
    opacity: 0;
    transition: opacity 0.3s;

    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: var(--light-navy) transparent transparent transparent;
    }
  }
`;

const Result: React.FC<{result: string}> = ({ result }) => {
    const [isTextCopied, setIsTextCopied] = useState<boolean>(false);
    const [copyText, setCopyText] = useState<string>("Copy to clipboard");

    return (
      <ResultContainer>
        <h3>Your Result Below</h3>
        <ResultCopy>{result}</ResultCopy>
        <CopyBtn
          onClick={() => {
            setIsTextCopied(true);
            setCopyText("Copied!");

            navigator.clipboard.writeText(result);
          }}
          onMouseOut={() => {
            setIsTextCopied(false);
            setCopyText("Copy to clipboard");
          }}
        >
          Copy Text
        </CopyBtn>
        <CopiedNotification showCopiedConfirmation={isTextCopied}>
          <p id="toolTipText">{copyText}</p>
        </CopiedNotification>
      </ResultContainer>
    );
}

export default Result;
