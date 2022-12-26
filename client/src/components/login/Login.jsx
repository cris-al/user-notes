import {
  FormLogin,
  InputContainer,
  ButtonContainer,
  Error,
  MainContainer,
  Paragraph,
  Label,
  LinkStyle,
} from "./loginStyled/LoginStyled";
import { useLoginHook } from "./hook/useLoginHook";
import Button from "../common/Button";
import Title from "../common/Title";
import Input from "../common/Input";
import { privateRoutes } from "routes/routes";

export default function Login() {
  const { values, touched, handleChange, errors, handleSubmit, handleBlur } =
    useLoginHook();

  return (
    <MainContainer className="my-4 my-sm-5">
      <div>
        <Title text="Inicia Sesión" />
      </div>
      <FormLogin onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Email: </Label>
          <Input
            type="email"
            value={values.email}
            name="email"
            placeholder="Ingresa un email..."
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          {touched.email && errors.email && <Error>{errors.email}</Error>}
        </InputContainer>
        <InputContainer>
          <Label>Contraseña: </Label>
          <Input
            type="password"
            value={values.password}
            name="password"
            placeholder="Ingresa una contraseña..."
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          {touched.password && errors.password && (
            <Error>{errors.password}</Error>
          )}
        </InputContainer>
        <ButtonContainer>
          <Button type="submit" text="Iniciar Sesión" />
        </ButtonContainer>
      </FormLogin>
      <Paragraph>
        ¿Aún no tienes cuenta?{" "}
        <LinkStyle to={privateRoutes.REGISTER}>Registrate.</LinkStyle>
      </Paragraph>
    </MainContainer>
  );
}
