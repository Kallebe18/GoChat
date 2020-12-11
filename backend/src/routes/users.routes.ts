import { Router } from 'express'

import usersController from '../controllers/usersController'
import validateUserProfileUpdateInfo from '../middlewares/validateUserProfileUpdateInfo'
import authenticateUser from '../middlewares/authenticateUser'

const UsersRoutes = Router()

UsersRoutes.post(
  '/update',
  authenticateUser,
  validateUserProfileUpdateInfo,
  usersController.update
)

export default UsersRoutes
