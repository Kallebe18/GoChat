import { Request, Response, NextFunction } from 'express'
import * as yup from 'yup'

import AppError from '../errors/AppError'

const validateUserProfileInfo = async (
  req: Request,
  res_: Response,
  next: NextFunction
) => {
  const userProfileInfoSchema = yup.object().shape({
    id: yup.string().required().uuid(),
    username: yup.string().required().max(20),
    age: yup.number().required().integer().min(18).max(99),
    gender: yup.string().required().length(1),
    bio: yup.string().required().max(255)
  })

  await userProfileInfoSchema
    .validate(req.body)
    .catch((err: yup.ValidationError) => {
      throw new AppError(err.errors[0], 403)
    })

  return next()
}

export default validateUserProfileInfo
