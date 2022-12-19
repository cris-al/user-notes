import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Image = styled.img`
  width: 450px;
  height: 450px;

  @media screen and (max-width: 935px) {
    width: 380px;
    height: 380px;
  }
  @media screen and (max-width: 835px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    width: 230px;
    height: 230px;
  }
`;
