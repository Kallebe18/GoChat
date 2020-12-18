import React, { useState, useCallback, useContext } from 'react';

import { useNavigation } from '@react-navigation/native';
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
import { UserContext } from '../../contexts/UserContext';

const welcomeLogo = require('../../assets/logo_icon.png');

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState<Boolean>(true);
  const userContext = useContext(UserContext);

  const handleSubmitLogin = useCallback(
    async data => {
      const { email, password } = data;
      await userContext.signIn({ email, password });
      navigation.navigate('MainRoutes');
    },
    [userContext, navigation],
  );

  const handleSubmitRegister = useCallback(async data => {
    // const { email, password, passwordConfirmation } = data;
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
