import styled from "styled-components";

export const MainContainer = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Card = styled.div`
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid blue;
  transition: 1s;
  &:hover {
    background-color: blue;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  @media screen and (min-width: 576px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;
