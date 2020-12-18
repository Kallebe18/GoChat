import React, { useState, useCallback, useContext } from 'react';

import { useNavigation } from '@react-navigation/native';
import { AxiosError, AxiosResponse } from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  HomeScreen,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeIcon,
  WelcomeTitle,
  FormContainer,
  ChangeFormTypeContainer,
  ChangeFormTypeText,
  HomeWarningText,
} from './styles';
import HomeForm from '../../components/HomeForm';
import SessionInput from '../../components/SessionInput';
import api from '../../services/api';
import UserContext from '../../contexts/UserContext';

const welcomeLogo = require('../../assets/logo_icon.png');

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState<Boolean>(true);
  const userContext = useContext(UserContext);

  const handleSubmitLogin = useCallback(data => {
    const { email, password } = data;

    api
      .post('/sessions/login', {
        email,
        password,
      })
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((error: AxiosError) => {
        console.error(error.response?.data);
      });
  }, []);

  const handleSubmitRegister = useCallback(async data => {
    const { email, password } = data;

    api
      .post('/sessions/register', {
        email,
        password,
      })
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((error: AxiosError) => {
        console.error(error.response?.data);
      });
  }, []);

  const changeFormType = useCallback(() => {
    setIsLogin(!isLogin);
  }, [isLogin]);

  return (
    <HomeScreen>
      <WelcomeContainer>
        <WelcomeIcon source={welcomeLogo} />
        <WelcomeTitle>Bem Vindo ao GoChat</WelcomeTitle>
        <WelcomeDescription>
          Converse com pessoas de forma anônima
        </WelcomeDescription>
      </WelcomeContainer>

      <FormContainer>
        {isLogin ? (
          <>
            <HomeForm
              submitButtonText="Entrar"
              handleSubmit={handleSubmitLogin}
            >
              <SessionInput name="email" placeholder="Email" />
              <SessionInput
                name="password"
                secureTextEntry
                placeholder="Password"
              />
            </HomeForm>
          </>
        ) : (
          <>
            <HomeForm
              submitButtonText="Registrar"
              handleSubmit={handleSubmitRegister}
            >
              <SessionInput name="email" placeholder="Email" />
              <SessionInput
                name="password"
                secureTextEntry
                placeholder="Password"
              />
              <SessionInput
                name="passwordConfirmation"
                secureTextEntry
                placeholder="Password Confirmation"
              />
            </HomeForm>
          </>
        )}
        <ChangeFormTypeContainer onPress={changeFormType}>
          <ChangeFormTypeText>
            {isLogin
              ? 'Já possui conta? Faça login aqui'
              : 'Não possui conta? Registre-se aqui'}
          </ChangeFormTypeText>
        </ChangeFormTypeContainer>
      </FormContainer>
      <HomeWarningText>
        Ao me registrar aceito as Políticas de Privacidade & Termos de Uso
      </HomeWarningText>
    </HomeScreen>
  );
};

export default Home;
