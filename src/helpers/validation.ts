import * as Yup from 'yup'


export const LoginSchemaValidation = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required.'),
  password: Yup.string()
    .min(8, 'At least 8 chracters!')
    .max(20, 'Too Long!')
    .matches(/[A-Z]/, 'Must have uppercase!')
    .matches(/[a-z]/, 'Must have lowercase!')
    .matches(/\d/, 'Must have numbers !')
    .matches(/\W/, 'Must have Non-alpha numeric !')
    .required('Password is required.')
})