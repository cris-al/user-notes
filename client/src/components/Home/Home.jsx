import { notes } from "./utilities/utilities";
import {
  HomeContainer,
  Card,
  Text,
  Paragraph,
  Image,
  Container,
  Div,
} from "./homeStyled/HomeStyled";
import { useState } from "react";
import Button from "../common/Button";
import Header from "components/Header/Header";
import SubTitle from "components/common/SubTitle";
import ImageTest from "assets/tree-736885__480.jpg";

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
      <Header />
      <Div>
        <SubTitle text="Última Nota:" />
        <Card>
          <Text>Nota Final</Text>
          <Container>
            <Paragraph>
              Esta es mi ultima nota, debo aclarar que bla bla bla Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Officia ipsum magni
              sunt eaque quod dolor quibusdam esse similique odit! Magnam error
              in bla basdal dawlkjdasd asdw dasdaw adaf asofjkdk odjkf woiefj
              ldskjf sldfhjskeufh sdjfhs eufh idjfh ks
            </Paragraph>
          </Container>
        </Card>
      </Div>
      <Div>
        <SubTitle text="Última Imagen:" />
        <Card>
          <Text>Titulo de la imagen</Text>
          <Image src={ImageTest} alt="IMAGEN DE PRUEBA" />
        </Card>
      </Div>
    </HomeContainer>
  );
}
