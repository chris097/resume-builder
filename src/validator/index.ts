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

export const userInfoSchema = Yup.object().shape({
    fullname: Yup.string().required("fullname is required."),
    email: Yup.string().required("email is required.").email().trim(),
    phone: Yup.string().required("phone is required."),
    portfolio: Yup.string().required("portfolio is required."),
    address: Yup.string().required("address is required."),
    bio: Yup.string().required("bio is required.")
});

export const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email().required("email is required").trim(),
});

export const resetPasswordSchema = Yup.object().shape({
     password: Yup.string().required('password is required.'),
    passwordConfirmation: Yup.string().required('passwords must match')
     .oneOf([Yup.ref('password'), null], 'passwords must match'),
})




