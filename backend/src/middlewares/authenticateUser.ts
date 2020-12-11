import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import auth from '../config/auth'
import AppError from '../errors/AppError'

async function authenticateUser(
  req: Request,
  res_: Response,
  next: NextFunction
) {
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader) {
    throw new AppError('Theres no auth header present in the request', 403)
  }

  const token = authorizationHeader.split(' ')[1]

  if (!token) {
    throw new AppError('Theres no token present in auth header', 403)
  }

  try {
    jwt.verify(token, auth.jwt.secret)
  } catch (err) {
    throw new AppError('Token is not valid', 401)
  }

  return next()
}

export default authenticateUser
