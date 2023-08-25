import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("email is required").trim(),
    password: Yup.string().required("password is required."),
});

export const registerSchema = Yup.object().shape({
    email: Yup.string().email().trim().required("email is required"),
    password: Yup.string().required('password is required.'),
    // passwordConfirmation: Yup.string().required('passwords must match')
    //  .oneOf([Yup.ref('password'), null], 'passwords must match'),
});




