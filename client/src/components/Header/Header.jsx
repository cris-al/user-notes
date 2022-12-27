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
import { Colors } from "themes/themes";

export default function Header({ show, setShow }) {
  function handleShow(e) {
    e.preventDefault();
    setShow(!show);
  }

  return (
    <HeaderContainer>
      <Image src={NotesIcon} alt="imagen" />
      <div className="d-flex gap-3">
        <Button
          text="Iniciar Sesión"
          onClick={handleShow}
          backgroundColor={Colors.background.blue}
          backgroundHover={Colors.hover.blue}
        />
        <Button
          text="Registrarme"
          onClick={handleShow}
          backgroundColor={Colors.background.red}
          backgroundHover={Colors.hover.red}
        />
      </div>
      {/* <LinksContainer>
        <LinkStyled to={privateRoutes.NOTES}>
          <Paragraph>Notas</Paragraph>
        </LinkStyled>
        <LinkStyled to={privateRoutes.IMAGES}>
          <Paragraph>Imagenes</Paragraph>
        </LinkStyled>
      </LinksContainer> */}
    </HeaderContainer>
  );
}
