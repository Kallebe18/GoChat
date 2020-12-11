import { getRepository } from 'typeorm'

import User from '../database/entities/User'
import AppError from '../errors/AppError'

interface UserUpdateInfoDTO {
  id: string
  username: string
  age: number
  gender: string
  bio: string
}

export default class UpdateUserInfoService {
  public async execute({ id, username, age, gender, bio }: UserUpdateInfoDTO) {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne(id)

    if (!user) {
      throw new AppError('user id doesnt exist', 404)
    }

    await userRepository.update(id, {
      username,
      age,
      gender,
      bio
    })

    const updatedUser = await userRepository.findOne(id)

    if (!updatedUser) {
      throw new AppError('user id doesnt exist', 404)
    }

    delete updatedUser.password

    return updatedUser
  }
}
