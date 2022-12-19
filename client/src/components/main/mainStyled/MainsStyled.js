import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;

  @media screen and (min-width: 375px) {
    padding: 1rem 2.3rem;
  }
  @media screen and (min-width: 768px) {
    padding: 1.5rem 2.8rem;
  }
`;

export const Container1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    padding: 1rem;
  }
  @media screen and (min-width: 992px) {
    padding: 0 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-shadow: 2px 2px 10px black;
  @media screen and (min-width: 576px) {
    font-size: 2.3rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.6rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 3.2rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 3.6rem;
  }
`;
export const SubTitle = styled.h1`
  font-size: 1.4rem;
  text-shadow: 2px 2px 10px black;
  @media screen and (min-width: 576px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.1rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 2.8rem;
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

export const Image = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (min-width: 576px) {
    width: 180px;
    height: 180px;
  }
  @media screen and (min-width: 768px) {
    width: 240px;
    height: 240px;
  }
  @media screen and (min-width: 992px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (min-width: 1200px) {
    width: 350px;
    height: 350px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
  @media screen and (min-width: 992px) {
    gap: 2.5rem;
  }
`;
