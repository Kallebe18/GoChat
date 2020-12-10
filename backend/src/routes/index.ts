import { Router } from 'express'

import SessionRoutes from './session.routes'

const Routes = Router()

Routes.use(SessionRoutes)

export default Routes
