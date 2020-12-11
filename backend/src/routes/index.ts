import { Router } from 'express'

import SessionRoutes from './session.routes'
import UsersRouter from './users.routes'

const Routes = Router()

Routes.use('/sessions', SessionRoutes)
Routes.use('/users', UsersRouter)

export default Routes
