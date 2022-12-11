import { useNavigate } from 'react-router-dom';
import { privateRoutes } from '../../routes/routes';
import { MainContainer, Container2, Title, Container1,
    Image, Paragraph, ButtonContainer } from './mainStyled/MainsStyled';
import NotesIcon from '../../assets/notes-icon.svg';
import Button from '../../common/Button';

export default function Main(){
    const navigate = useNavigate();

    function toLogin(){
        navigate(privateRoutes.LOGIN)
    }

    function toRegister(){
        navigate(privateRoutes.REGISTER);
    }
    return(
        <MainContainer>
            <Title size='4rem'>Notas de Usuario</Title>
            <Container1>
                <Container2>
                    <Image src={NotesIcon} alt='icono de notas' />
                </Container2>

                <Container2>
                    <Title>Bienvenidos</Title>
                    <Paragraph>
                        Notas de Usuario es una aplicación en la que podrás tomar notas sobre lo que desees 
                        y quedarán guardadas para que las veas cuando gustes.
                    </Paragraph>
                    <ButtonContainer>
                        <Button text='LOGUEARME' onClick={toLogin}/>
                        <Button text='REGISTRARME' onClick={toRegister}/>
                    </ButtonContainer>
                </Container2>
            </Container1>
        </MainContainer>
    )
}