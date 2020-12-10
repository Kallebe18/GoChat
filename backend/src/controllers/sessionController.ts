import { Request, Response } from 'express'
import * as yup from 'yup'

import AppError from '../errors/AppError'
import RegisterUserService from '../services/registerUserService'

export default {
  async create(req: Request, res: Response) {
    const { email, password } = req.body

    const registerSchema = yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8)
    })

    await registerSchema
      .validate({ email, password })
      .catch((err: yup.ValidationError) => {
        throw new AppError(err.errors[0], 403)
      })

    const registerUserService = new RegisterUserService()

    const registeredUser = await registerUserService.execute({
      email,
      password
    })

    console.log(registeredUser)

    return res.json({
      message: 'user registered with success',
      email
    })
  }
}
