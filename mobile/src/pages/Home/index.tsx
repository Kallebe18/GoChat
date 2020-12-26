import React, { useState, useCallback, useContext, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AxiosError } from 'axios';

import { ValidationError } from 'yup';
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
import {
  loginSchema,
  registerSchema,
} from '../../validations/sessionValidations';
import api from '../../services/api';

const welcomeLogo = require('../../assets/logo_icon.png');

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState<Boolean>(true);
  const userContext = useContext(UserContext);
  const [alertInfo, setAlertInfo] = useState('');

  useEffect(() => {
    if (userContext.user) {
      navigation.navigate('MainRoutes');
    }
  }, [navigation, userContext.user]);

  const handleSubmitLogin = useCallback(
    async data => {
      const { email, password } = data;
      try {
        await loginSchema.validate({ email, password });
      } catch (err) {
        if (err instanceof ValidationError) {
          setAlertInfo(`${err.message}`);
        }
        return;
      }

      try {
        await userContext.signIn({ email, password });
        navigation.navigate('MainRoutes');
      } catch (err) {
        setAlertInfo('Invalid email or password');
      }
    },
    [userContext, navigation],
  );

  const handleSubmitRegister = useCallback(async data => {
    const { email, password, passwordConfirmation } = data;
    try {
      if (password !== passwordConfirmation) {
        throw new Error('Passwords do not match.');
      }
      await registerSchema.validate({ email, password, passwordConfirmation });
      const response = await api.post('/sessions/register', {
        email,
        password,
      });
      console.log(response);
    } catch (err) {
      console.log(password, passwordConfirmation);
      setAlertInfo(err.message);
    }
  }, []);

  const changeFormType = useCallback(() => {
    setIsLogin(!isLogin);
  }, [isLogin]);

  return userContext.loading ? (
    <View
      style={{
        backgroundColor: '#849',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator size="large" color="#999" />
    </View>
  ) : (
    <HomeScreen>
      <WelcomeContainer>
        <WelcomeIcon source={welcomeLogo} />
        <WelcomeTitle>Bem Vindo ao GoChat</WelcomeTitle>
        <WelcomeDescription>
          Converse com pessoas de forma anônima
        </WelcomeDescription>
      </WelcomeContainer>

      <FormContainer>
        {!!alertInfo && (
          <Text
            style={{
              color: '#fd6161',
              fontSize: 16,
              fontWeight: '600',
              margin: 10,
            }}
          >
            {alertInfo}
          </Text>
        )}
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
