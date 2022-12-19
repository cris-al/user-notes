import { Link } from "react-router-dom";
import Button from "../common/Button";
import { privateRoutes } from "../../routes/routes";
import { HeaderContainer, LinkStyled } from "./headerStyled/HeaderStyled";

export default function Header() {
  return (
    <HeaderContainer>
      <h3>Notas de Usuario</h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        <LinkStyled to={privateRoutes.NOTES}>Mis notas</LinkStyled>
        <LinkStyled to={privateRoutes.IMAGES}>Mis imagenes</LinkStyled>
      </div>
    </HeaderContainer>
  );
}
