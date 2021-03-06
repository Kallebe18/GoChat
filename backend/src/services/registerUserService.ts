import bcrypt from 'bcrypt'
import { getRepository } from 'typeorm'

import User from '../database/entities/User'
import AppError from '../errors/AppError'

interface RegisterUserDTO {
  email: string
  password: string
}

export default class RegisterUserService {
  public async execute({ email, password }: RegisterUserDTO) {
    const userRepository = getRepository(User)

    const userAlreadyExists = await userRepository.findOne({
      where: { email }
    })

    if (userAlreadyExists) {
      throw new AppError('User with this email already exists', 403)
    }

    const hash = await bcrypt.hash(password, 10)
    const user = userRepository.create({
      email,
      password: hash
    })

    await userRepository.save(user)

    delete user.password
    return user
  }
}
