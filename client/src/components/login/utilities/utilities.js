import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Debe ingresar un email valido')
    .required('Campo requerido'),
    password: Yup.string().min(8, 'Debe contener almenos 8 caracteres').required('Campo requerido')
});