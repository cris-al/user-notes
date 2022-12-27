import styled from "styled-components";
import { Colors } from "../../themes/themes";

const ButtonStyled = styled.button`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : Colors.background.green};
  border: none;
  border-radius: 5px;
  padding: 0.8rem;
  box-shadow: 1px 2px 6px black;
  color: ${Colors.word.grey};
  font-size: 0.8rem;
  &:hover {
    cursor: pointer;
    background-color: ${({ backgroundHover }) =>
      backgroundHover ? backgroundHover : Colors.hover.green};
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
  backgroundColor,
  backgroundHover,
}) {
  return (
    <ButtonStyled
      onClick={onClick}
      type={type}
      backgroundColor={backgroundColor}
      backgroundHover={backgroundHover}
    >
      {text}
    </ButtonStyled>
  );
}
