import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  LoginScreen,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeIcon,
  WelcomeTitle,
  LoginContainer,
  LoginButtonContainer,
  LoginButtonText,
  LoginWarningText,
} from './styles';

const welcomeLogo = require('../../assets/logo_icon.png');

const Login: React.FC = () => {
  const navigation = useNavigation();
  const handleGoogleLogin = () => {
    navigation.navigate('MainRoutes');
  };

  const handleFacebookLogin = () => {
    navigation.navigate('MainRoutes');
  };

  return (
    <LoginScreen>
      <WelcomeContainer>
        <WelcomeIcon source={welcomeLogo} />
        <WelcomeTitle>Bem Vindo ao GoChat</WelcomeTitle>
        <WelcomeDescription>
          Converse com pessoas de forma anônima
        </WelcomeDescription>
      </WelcomeContainer>

      <LoginContainer>
        <LoginButtonContainer loginType="google" onPress={handleGoogleLogin}>
          <LoginButtonText>LOGIN COM GOOGLE</LoginButtonText>
        </LoginButtonContainer>
        <LoginButtonContainer
          loginType="facebook"
          onPress={handleFacebookLogin}
        >
          <LoginButtonText>LOGIN COM FACEBOOK</LoginButtonText>
        </LoginButtonContainer>
        <LoginWarningText>
          Ao me registrar aceito as Políticas de Privacidade & Termos de Uso
        </LoginWarningText>
      </LoginContainer>
    </LoginScreen>
  );
};

export default Login;
