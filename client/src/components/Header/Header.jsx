import { Link } from "react-router-dom";
import Button from "../common/Button";
import { privateRoutes } from "../../routes/routes";
import {
  HeaderContainer,
  LinkStyled,
  LinksContainer,
  Paragraph,
  Image,
} from "./headerStyled/HeaderStyled";
import NotesIcon from "assets/notes-icon.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={NotesIcon} alt="imagen" />
      <LinksContainer>
        <LinkStyled to={privateRoutes.NOTES}>
          <Paragraph>Notas</Paragraph>
        </LinkStyled>
        <LinkStyled to={privateRoutes.IMAGES}>
          <Paragraph>Imagenes</Paragraph>
        </LinkStyled>
      </LinksContainer>
    </HeaderContainer>
  );
}
