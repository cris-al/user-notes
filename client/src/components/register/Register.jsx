import { FormContainer, InputContainer, RegisterContainer,
    Container1 } from './registerStyled/RegisterStyled';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { Image } from './registerStyled/RegisterStyled';
import NotesIcon from '../../assets/notes-icon.svg';

export default function Register(){

    return(
        <RegisterContainer>
            <Image src={NotesIcon} alt='icono de notas'/>
            <Container1>
                <h1>Registrarme</h1>
                <FormContainer>
                    <InputContainer>
                        <label>Nombre: </label>
                        <Input type='text' name='name' />
                    </InputContainer>

                    <InputContainer>
                        <label>Apellido: </label>
                        <Input type='text' name='lastName' />
                    </InputContainer>

                    <InputContainer>
                        <label>Email: </label>
                        <Input type='email' name='email' />
                    </InputContainer>

                    <InputContainer>
                        <label>Contraseña: </label>
                        <Input type='password' name='password' />
                    </InputContainer>
                    <Button text='REGISTRARME' type='submit'/>
                </FormContainer>
            </Container1>
        </RegisterContainer>
    )
}