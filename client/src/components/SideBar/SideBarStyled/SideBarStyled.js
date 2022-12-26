import Offcanvas from "react-bootstrap/Offcanvas";
import styled from "styled-components";
import { Colors } from "themes/themes";
import { Link } from "react-router-dom";

export const OffcanvasStyled = styled(Offcanvas)`
  background-color: ${Colors.background.darkGreen};
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${Colors.word.grey} !important;
  transition: 0.8s;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: ${Colors.hover.green};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
