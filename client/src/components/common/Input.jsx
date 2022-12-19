import styled from "styled-components";

const InputStyled = styled.input`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0.2rem 0.6rem;
`;

export default function Input({
  type,
  name,
  handleChange,
  value,
  placeholder,
}) {
  return (
    <InputStyled
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}
