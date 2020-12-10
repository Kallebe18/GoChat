import { Request, Response } from 'express'

import RegisterUserService from '../services/registerUserService'
import LoginUserService from '../services/loginUserService'

export default {
  async index(req: Request, res: Response) {
    const { email, password } = req.body

    const loginUserService = new LoginUserService()

    const user = await loginUserService.execute({ email, password })

    return res.json({
      message: 'successfully logged in',
      email: user.email,
      token: user.token
    })
  },
  async create(req: Request, res: Response) {
    const { email, password } = req.body

    const registerUserService = new RegisterUserService()

    await registerUserService.execute({ email, password })

    return res.json({
      message: 'user registered with success',
      email
    })
  }
}
