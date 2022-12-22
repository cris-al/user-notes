import styled from "styled-components";
import { Colors } from "themes/themes";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;
  border: 1px solid ${Colors.background.grey};
  border-radius: 1rem;
  padding: 1.5rem;
  @media screen and (min-width: 375px) {
    width: 280px;
  }
  @media screen and (min-width: 576px) {
    width: 400px;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 2.5rem;
  }
  @media screen and (min-width: 992px) {
    width: 700px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  @media screen and (min-width: 375px) {
    font-size: 1.1rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  background-color: ${Colors.background.grey};
  color: ${Colors.word.grey};
  resize: none;
  @media and screen (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
