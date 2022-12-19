import { notes } from "./utilities/utilities";
import {
  HomeContainer,
  CardContainer,
  Note,
  Div,
  ButtonContainer,
  Card,
  NoteContainer,
  Header,
} from "./homeStyled/HomeStyled";
import { useState } from "react";
import Button from "../common/Button";

export default function Home() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleClick(e, el) {
    e.preventDefault();
    setNote({
      title: el.title,
      content: el.content,
    });
  }

  return (
    <HomeContainer>
      <CardContainer>
        <h3 style={{ marginLeft: "1rem" }}>Mis Notas: </h3>
        {notes?.map((el) => (
          <Card onClick={(e) => handleClick(e, el)}>
            <h4>{el.title}</h4>
            <p>{el.content}</p>
          </Card>
        ))}
      </CardContainer>
      <NoteContainer>
        <Header>
          <h1>Notas de Usuario</h1>
          <Button text="Nueva Nota" />
        </Header>
        {note.title ? (
          <Note>
            <Div>
              <h2>{note.title}</h2>
              <ButtonContainer>
                <Button text="Editar" />
                <Button text="Eliminar" backgroundColor="red" />
              </ButtonContainer>
            </Div>
            <p>{note.content}</p>
          </Note>
        ) : (
          <h3>Loading...</h3>
        )}
      </NoteContainer>
    </HomeContainer>
  );
}
