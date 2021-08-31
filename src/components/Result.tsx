import React from "react";
import styled from "styled-components";

const ResultCopy = styled.p`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%2331302c33' stroke-width='3' stroke-dasharray='8%2c 10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  min-height: 11rem;
  padding: 2rem;
  border-radius: 6px;
  text-align: left;
`;

const Result: React.FC<{result: string}> = ({ result }) => {
    return (
      <div>
        <h3>Your Result Below</h3>
        <ResultCopy>{result}</ResultCopy>
        {/* <button
              onClick={() => {
                navigator.clipboard.writeText(result);
              }}
            >
              Click to Copy
            </button> */}
      </div>
    );
}

export default Result;
