import { Router } from 'express'

import sessionController from '../controllers/sessionController'
import validateUserSessionInfo from '../middlewares/validateUserSessionInfo'

const SessionRoutes = Router()

SessionRoutes.use(validateUserSessionInfo)
SessionRoutes.post('/register', sessionController.create)
SessionRoutes.post('/login', sessionController.index)

export default SessionRoutes
