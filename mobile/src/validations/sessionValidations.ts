import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export const registerSchema = yup.object().shape({
  email: yup.string().required().lowercase().email(),
  passwordConfirmation: yup.string().required().min(8),
  password: yup.string().required().min(8),
});
