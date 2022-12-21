import styled from "styled-components";
import { Colors } from "themes/themes";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  border: 1px solid ${Colors.background.grey};
  border-radius: 1rem;
  padding: 1.5rem;
  @media screen and (min-width: 375px) {
    width: 280px;
  }
  @media screen and (min-width: 576px) {
    width: 330px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 2.5rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Error = styled.div`
  color: red;
  font-size: 0.7rem;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
  @media screen and (min-width: 375px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
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

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${Colors.word.green};
  &:hover {
    color: ${Colors.hover.green};
    text-decoration: underline;
  }
`;
