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
  loading: boolean;
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await AsyncStorage.getItem('@GoChat:user');
      if (!userInfo) {
        setLoading(false);
        return;
      }
      const { user, token } = JSON.parse(userInfo);
      setUserData({ user, token });
    };

    getUserInfo();
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInParams) => {
    const response = await api.post('/sessions/login', {
      email,
      password,
    });
    const { user, token } = response.data;

    await AsyncStorage.setItem('@GoChat:user', JSON.stringify({ user, token }));

    setUserData({ user, token });
  }, []);

  const signOut = useCallback(async () => {
    setUserData({} as AuthState);
  }, []);

  return (
    <UserContext.Provider
      value={{ user: userData.user, loading, signIn, signOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
