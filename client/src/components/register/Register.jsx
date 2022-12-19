import {
  Form,
  InputContainer,
  RegisterContainer,
  Container1,
  Container2,
} from "./registerStyled/RegisterStyled";
import Input from "../common/Input";
import Button from "../common/Button";
import { Image } from "./registerStyled/RegisterStyled";
import NotesIcon from "../../assets/notes-icon.svg";

export default function Register() {
  return (
    <RegisterContainer>
      <Image src={NotesIcon} alt="icono de notas" />
      <Container1>
        <h1>Registrarme</h1>
        <Form>
          <Container2>
            <InputContainer>
              <label>Nombre: </label>
              <Input type="text" name="name" placeholder="Nombre..." />
            </InputContainer>

            <InputContainer>
              <label>Apellido: </label>
              <Input type="text" name="lastName" placeholder="Apellido..." />
            </InputContainer>

            <InputContainer>
              <label>Email: </label>
              <Input type="email" name="email" placeholder="Email..." />
            </InputContainer>

            <InputContainer>
              <label>Contraseña: </label>
              <Input
                type="password"
                name="password"
                placeholder="Contraseña..."
              />
            </InputContainer>
          </Container2>
          <Button text="REGISTRARME" type="submit" />
        </Form>
      </Container1>
    </RegisterContainer>
  );
}
