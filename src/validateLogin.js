
//import { string, object } from 'yup';
import * as yup from 'yup';

const LoginValidationSchena = yup.object().shape({
    user: yup
        .string()
        .required("Introduce nombre y apellido"),
    pass: yup
        .string()
        .required('La contrasenya es necesaria. Es el número de entrada para Nakama fest asiganda a tu nombre'),
});

export default LoginValidationSchena;