import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Debe contener almenos 3 caracteres")
    .max(20, "Debe contener maximo 20 caracteres")
    .required("Campo requerido"),
  description: Yup.string()
    .min(10, "Debe contener almenos 10 caracteres")
    .required("Campo requerido"),
});

export const initialValues = {
  title: "",
  description: "",
};
