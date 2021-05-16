import * as Yup from 'yup'


export const LoginSchemaValidation = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required.'),
  password: Yup.string()
    .min(8, 'At least 8 chracters!')
    .max(20, 'Too Long!')
    .required('Password is required.')
})