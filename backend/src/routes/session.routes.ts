import { Router } from 'express'

import sessionController from '../controllers/sessionController'

const SessionRoutes = Router()

SessionRoutes.post('/register', sessionController.create)

export default SessionRoutes
