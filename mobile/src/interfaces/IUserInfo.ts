export interface RequestUserInfo {
  id: number;
  avatarUrl: string;
  name: string;
  bio: string;
}

export interface UserData {
  id: string;
  email: string;
  username: string;
  age: number;
  gender: string;
  bio: string;
  token: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  passwordConfirmation: string;
}
