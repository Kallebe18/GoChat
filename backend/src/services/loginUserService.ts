import { getRepository } from 'typeorm'
import bcrypt from 'bcrypt'

import User from '../database/entities/User'
import AppError from '../errors/AppError'

interface LoginUserParams {
  email: string
  password: string
}

export default class LoginUserService {
  public async execute({ email, password }: LoginUserParams) {
    const userRepository = getRepository(User)
    const user = await userRepository.findOne({
      where: { email }
    })

    if (user) {
      const passwordValid = await bcrypt.compare(password, user.password)
      if (passwordValid) return user
    }

    throw new AppError('Invalid email or password', 404)
  }
}
