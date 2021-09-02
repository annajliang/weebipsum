import styled from "styled-components";

export const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  bottom: 7.5rem;

  @media (max-width: 700px) {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 580px) {
    max-width: 400px;
  }

  @media (max-width: 450px) {
    max-width: 350px;
  }

  @media (max-width: 420px) {
    max-width: 300px;
  }
`;

export const Btn = styled.button<{ generate?: boolean }>`
  display: block;
  margin: 2rem auto 0;
  background-color: ${props => props.generate ? "#f26663" : "#fff"};
  font: ${props => props.generate ? "600 2.5rem 'Action Man' !important" : "600 1.75rem 'Action Man' !important"};
  border: ${props => props.generate ? "2.5px solid #de2828" : "2px solid #31302c"};
  padding: 1rem 2rem;
  border-radius: 6px;
  position: ${props => props.generate ? "relative" : "absolute"};
  z-index: 1;

  @media (max-width: 580px) {
     font: ${props => props.generate ? "600 2rem 'Action Man' !important" : "600 1.5rem 'Action Man' !important"};
  }
`;