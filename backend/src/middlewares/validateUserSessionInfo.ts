import { Request, Response, NextFunction } from 'express'
import * as yup from 'yup'

import AppError from '../errors/AppError'

async function validateUserSessionInfo(
  req: Request,
  res_: Response,
  next: NextFunction
) {
  const registerSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
  })

  await registerSchema.validate(req.body).catch((err: yup.ValidationError) => {
    throw new AppError(err.errors[0], 403)
  })

  return next()
}

export default validateUserSessionInfo
