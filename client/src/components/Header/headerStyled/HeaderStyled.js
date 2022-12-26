import styled from "styled-components";
import { Colors } from "../../../themes/themes";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const NavBarStyled = styled(Navbar)`
  background-color: ${Colors.background.blue};
  box-shadow: 0 0 8px ${Colors.shadow.black};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.background.darkGreen};
  height: 60px;
  padding-right: 1rem;
  padding-left: 0.5rem;
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
  height: 90%;
`;
