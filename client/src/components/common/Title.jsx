import styled from "styled-components";

const Text = styled.h1`
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

export default function Title({ text }) {
  return <Text>{text}</Text>;
}
