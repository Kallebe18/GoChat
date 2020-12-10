import { Request, Response } from 'express'
import * as yup from 'yup'

import AppError from '../errors/AppError'

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

    return res.json({
      msg: 'ok'
    })
  }
}
