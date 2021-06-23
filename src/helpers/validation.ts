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

export const SignUpSchemaValidation = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required.'),
  password: Yup.string()
    .min(8, 'At least 8 chracters!')
    .max(20, 'Too Long!')
    .required('Password is required.'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Passwords does not match'
  ).required('Please confirm your password'),
})

export const SetUpAccountValidation = Yup.object({
  firstName: Yup.string().required('First name is required.'),
  lastName: Yup.string().required('Last name is required.'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required.'),
})

export const AddWorkspaceValidation = Yup.object({
  title: Yup.string().required('Title is required.'),
  description: Yup.string().required('Description is required.'),
})