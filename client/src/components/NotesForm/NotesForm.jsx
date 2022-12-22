import {
  MainContainer,
  Form,
  Label,
  InputContainer,
  TextArea,
} from "./NotesFormStyles/NotesFormStyles";
import Title from "components/common/Title";
import Input from "components/common/Input";
import Button from "components/common/Button";

export default function NotesForm() {
  return (
    <MainContainer>
      <Title text="Crear Nota" />
      <Form>
        <InputContainer>
          <Label>Titulo:</Label>
          <Input name="title" placeholder="Ingresa un titulo..." />
        </InputContainer>
        <InputContainer>
          <Label>Descripción:</Label>
          <TextArea rows={10} placeholder="Ingresa una descripción..." />
        </InputContainer>
        <Button text="Crear" />
      </Form>
    </MainContainer>
  );
}
