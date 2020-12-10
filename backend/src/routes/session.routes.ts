import { Router } from 'express'

import sessionController from '../controllers/sessionController'
import validateUserInfo from '../middlewares/validateUserInfo'
import authenticateUser from '../middlewares/authenticateUser'

const SessionRoutes = Router()

SessionRoutes.post('/register', validateUserInfo, sessionController.create)
SessionRoutes.post('/login', validateUserInfo, sessionController.index)
SessionRoutes.get('/test_token', authenticateUser, (req, res, n) => {
  return n()
})

export default SessionRoutes
