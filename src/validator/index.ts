import * as yup from 'yup';

export const userinfoSchema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    profession: yup.string().required(),
    city: yup.string().required(),
    email: yup.string().email().trim().required(),
    phone: yup.string().required(),
    street: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    bio: yup.string().required().min(50).max(500),
    linkedin: yup.string().required(),
    twitter: yup.string().required(),
    website: yup.string().required()
});

export const workHistorySchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    employer: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    start_date: yup.string().required(),
    end_date: yup.string()
});

export const loginSchema = yup.object().shape({
    email: yup.string().email().required("email is required").trim(),
    password: yup.string().required("password is required."),
});

export const registerSchema = yup.object().shape({
    fullName: yup.string().required("fullName is required."),
    email: yup.string().email().trim().required("email is required"),
    password: yup.string().required('password is required.')
});