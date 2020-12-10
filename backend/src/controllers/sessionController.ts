import { Request, Response } from 'express'
import * as yup from 'yup'

import AppError from '../errors/AppError'
import RegisterUserService from '../services/registerUserService'
import LoginUserService from '../services/loginUserService'

export default {
  async index(req: Request, res: Response) {
    const { email, password } = req.body

    const registerSchema = yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8)
    })

    await registerSchema
      .validate(req.body)
      .catch((err: yup.ValidationError) => {
        throw new AppError(err.errors[0], 403)
      })

    const loginUserService = new LoginUserService()

    const user = await loginUserService.execute({ email, password })

    return res.json({
      message: 'successfully logged in',
      email: user.email
    })
  },
  async create(req: Request, res: Response) {
    const { email, password } = req.body

    const registerSchema = yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8)
    })

    await registerSchema
      .validate(req.body)
      .catch((err: yup.ValidationError) => {
        throw new AppError(err.errors[0], 403)
      })

    const registerUserService = new RegisterUserService()

    await registerUserService.execute({ email, password })

    return res.json({
      message: 'user registered with success',
      email
    })
  }
}
