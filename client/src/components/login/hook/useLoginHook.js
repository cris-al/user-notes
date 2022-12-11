import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { validationSchema } from '../utilities/utilities';
import { login } from '../../../redux/actions/actions';

export const useLoginHook = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const dispatch = useDispatch();

    function onSubmit(){
        dispatch(login(formik.values));
    }

    const formik = useFormik({initialValues, onSubmit, validationSchema});
    const {values, errors, touched, handleChange, 
        handleSubmit, handleBlur} = formik;

    return {values, errors, touched, handleChange, handleSubmit, handleBlur}
}