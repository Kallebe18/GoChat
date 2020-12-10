import bcrypt from 'bcrypt'
import { getRepository } from 'typeorm'

import User from '../database/entities/User'

interface RegisterUserParams {
  email: string
  password: string
}

export default class RegisterUserService {
  public async execute({ email, password }: RegisterUserParams) {
    const userRepository = getRepository(User)
    const hash = await bcrypt.hash(password, 10)
    const user = userRepository.create({
      email,
      password: hash
    })

    await userRepository.save(user)

    return user
  }
}
