import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import Routes from './routes'
import AppError from './errors/AppError'

const app = express()

app.use(express.json())
app.use(Routes)
app.use((err: Error, req_: Request, res: Response, next_: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    })
  }

  return res.status(500).json({
    message: 'Internal server error'
  })
})

const port = 3333
app.listen(port, () => {
  console.log(`server started at port ${port}`)
})
