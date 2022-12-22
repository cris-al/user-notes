import styled from "styled-components";
import { Colors } from "../../themes/themes";

const InputStyled = styled.input`
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  background-color: ${Colors.background.grey};
  color: ${Colors.word.grey};
  @media and screen (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default function Input({
  type = "text",
  name,
  handleChange,
  value,
  placeholder,
  handleBlur,
}) {
  return (
    <InputStyled
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      onBlur={handleBlur}
    />
  );
}
