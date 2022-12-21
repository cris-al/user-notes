import styled from "styled-components";
import { Colors } from "../../../themes/themes";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.background.blue};
  width: 100vw;
  height: 60px;
  box-shadow: 0 0 8px ${Colors.shadow.black};
  @media screen and (min-width: 576px) {
    height: 70px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  padding: 0 1rem;
  gap: 0.8rem;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${Colors.word.grey};

  &:hover {
    color: ${Colors.hover.grey};
  }
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
`;

export const Image = styled.img`
  height: 80%;
  margin-left: 0.5rem;
`;
