import styled from "styled-components";
import { Colors } from "../../themes/themes";

const { background, hover, word } = Colors;

const ButtonStyled = styled.button`
  background-color: ${({ backgroundColor }) =>
    backgroundColor === "red" ? background.red : background.green};
  border: none;
  border-radius: 5px;
  padding: 0.8rem;
  box-shadow: 1px 2px 6px black;
  color: ${word.grey};
  font-size: 0.7rem;
  &:hover {
    cursor: pointer;
    background-color: ${({ backgroundColor }) =>
      backgroundColor === "red" ? hover.red : hover.green};
  }
  @media screen and (min-width: 576px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Button({
  text,
  onClick,
  type = "button",
  backgroundColor = "",
}) {
  return (
    <ButtonStyled
      onClick={onClick}
      type={type}
      backgroundColor={backgroundColor}
    >
      {text}
    </ButtonStyled>
  );
}
