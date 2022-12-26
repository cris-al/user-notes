import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { validationSchema, initialValues } from "../utilities/utilities";

export const useNotes = () => {
  const { id } = useParams();

  const createNote = () => {};
  const editNote = () => {};

  const onSubmit = () => {
    if (id) createNote();
    else editNote();
  };

  const formik = useFormik({ onSubmit, initialValues, validationSchema });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    formik;

  return {
    id,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  };
};
