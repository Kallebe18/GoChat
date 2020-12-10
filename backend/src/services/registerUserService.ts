import bcrypt from 'bcrypt'

interface RegisterUserParams {
  email: string
  password: string
}

export default class RegisterUserService {
  public async execute({ email, password }: RegisterUserParams) {
    const hash = await bcrypt.hash(password, 10)
    return hash
  }
}
