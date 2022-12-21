import {
  Form,
  InputContainer,
  RegisterContainer,
  ButtonContainer,
  Paragraph,
  LinkStyle,
  Label,
} from "./registerStyled/RegisterStyled";
import Input from "../common/Input";
import Button from "../common/Button";
import Title from "components/common/Title";
import { privateRoutes } from "routes/routes";

export default function Register() {
  return (
    <RegisterContainer>
      <div>
        <Title text="Registrate" />
      </div>
      <Form>
        <InputContainer>
          <Label>Nombre: </Label>
          <Input type="text" name="name" placeholder="Nombre..." />
        </InputContainer>

        <InputContainer>
          <Label>Email: </Label>
          <Input type="email" name="email" placeholder="Email..." />
        </InputContainer>

        <InputContainer>
          <Label>Contraseña: </Label>
          <Input type="password" name="password" placeholder="Contraseña..." />
        </InputContainer>

        <InputContainer>
          <Label>Repetir contraseña: </Label>
          <Input type="password" name="password" placeholder="Contraseña..." />
        </InputContainer>

        <ButtonContainer>
          <Button text="Registrarme" type="submit" />
        </ButtonContainer>
      </Form>
      <Paragraph>
        ¿Ya tienes una cuenta?{" "}
        <LinkStyle to={privateRoutes.LOGIN}>Inicia Sesión.</LinkStyle>
      </Paragraph>
    </RegisterContainer>
  );
}
