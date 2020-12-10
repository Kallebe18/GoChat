import { Router } from 'express'

import sessionController from '../controllers/sessionController'

const SessionRoutes = Router()

SessionRoutes.post('/register', sessionController.create)
SessionRoutes.post('/login', sessionController.index)

export default SessionRoutes
