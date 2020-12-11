import { getRepository } from 'typeorm'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import auth from '../config/auth'
import User from '../database/entities/User'
import AppError from '../errors/AppError'

interface UserLoginDTO {
  email: string
  password: string
}

export default class LoginUserService {
  public async execute({ email, password }: UserLoginDTO) {
    const userRepository = getRepository(User)
    const user = await userRepository.findOne({
      where: { email }
    })

    if (user && user.password) {
      const passwordValid = await bcrypt.compare(password, user.password)
      if (passwordValid) {
        const token = jwt.sign(
          {
            id: user.id
          },
          auth.jwt.secret,
          {
            expiresIn: auth.jwt.expiresIn
          }
        )
        delete user.password
        return {
          user,
          token
        }
      }
    }

    throw new AppError('Invalid email or password', 404)
  }
}
