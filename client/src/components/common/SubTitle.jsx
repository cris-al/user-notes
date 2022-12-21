import styled from "styled-components";

const Text = styled.h2`
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

export default function SubTitle({ text }) {
  return <Text>{text}</Text>;
}
