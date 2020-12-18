import React, { createContext, useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserData } from '../interfaces/IUserInfo';
import api from '../services/api';

interface SignInParams {
  email: string;
  password: string;
}

interface AuthState {
  user: UserData;
  token: string;
}

interface UserContextValues {
  user: UserData;
  // eslint-disable-next-line no-unused-vars
  signIn(signInParams: SignInParams): Promise<void>;
  signOut(): Promise<void>;
}

export const UserContext = createContext<UserContextValues>(
  {} as UserContextValues,
);

const UserContextProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    AsyncStorage.getItem('@GoChat:user').then(value => {
      if (!value) return;
      const user = JSON.parse(value);
      setUserData(user);
    });
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInParams) => {
    const response = await api.post('/sessions/login', {
      email,
      password,
    });
    const { user, token } = response.data;

    setUserData({ user, token });
  }, []);

  const signOut = useCallback(async () => {
    setUserData({} as AuthState);
  }, []);

  return (
    <UserContext.Provider value={{ user: userData.user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
