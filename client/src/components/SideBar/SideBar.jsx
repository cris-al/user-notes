import { Dropdown, NavDropdown } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { privateRoutes } from "routes/routes";
import {
  OffcanvasStyled,
  LinksContainer,
  LinkStyled,
} from "./SideBarStyled/SideBarStyled";

export default function SideBar({ show, setShow }) {
  return (
    <>
      <OffcanvasStyled show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <LinksContainer>
            <LinkStyled to={privateRoutes.NOTES}>Mis Notas</LinkStyled>
            <LinkStyled to={privateRoutes.IMAGES}>Mis Imagenes</LinkStyled>
          </LinksContainer>
        </Offcanvas.Body>
      </OffcanvasStyled>
    </>
  );
}
