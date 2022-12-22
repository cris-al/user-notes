import styled from "styled-components";

const Div = styled.div`
  max-width: 1400px;
`;

export default function WindowsSize({ children }) {
  return <Div>{children}</Div>;
}
