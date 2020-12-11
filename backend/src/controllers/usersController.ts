import { Request, Response } from 'express'

import UpdateUserService from '../services/updateUserInfoService'

export default {
  async update(req: Request, res: Response) {
    const { id, username, age, gender, bio } = req.body

    const updateUserService = new UpdateUserService()

    const newUser = await updateUserService.execute({
      id,
      username,
      age,
      gender,
      bio
    })

    return res.json({
      message: 'user profile updated successfully',
      user: newUser
    })
  }
}
