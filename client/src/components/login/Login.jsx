import { FormLogin, ContainerInput, Button,
    ContainerButton, Error } from './loginStyled/LoginStyled';
import { useLoginHook } from './hook/useLoginHook';

export default function Login(){
    const {values, touched, handleChange, errors,
        handleSubmit, handleBlur} = useLoginHook();

    return(
        <FormLogin onSubmit={handleSubmit}>
            <ContainerInput>
                <label>Email: </label>
                <input type="email" value={values.email}
                    name='email' placeholder='Ingresa un email...'
                    onBlur={handleBlur} onChange={handleChange}/>
            </ContainerInput>
            { touched.email && errors.email && <Error>{errors.email}</Error>}
            <ContainerInput>
                <label>Contraseña: </label>
                <input type="password" value={values.password}
                    name='password' placeholder='Ingresa una contraseña...'
                    onBlur={handleBlur} onChange={handleChange}/>
            </ContainerInput>
            { touched.password && errors.password && <Error>{errors.password}</Error>}
            <ContainerButton>
                <Button type='submit'>Login</Button>
            </ContainerButton>
        </FormLogin>
    )
}