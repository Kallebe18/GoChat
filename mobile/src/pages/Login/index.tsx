import React from 'react';

import {
  LoginScreen,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeIcon,
  WelcomeTitle,
  LoginContainer,
  LoginButtonGoogle,
  LoginButtonTextGoogle,
  LoginWarningText,
} from './styles';
const welcomeLogo = require('../../assets/logo_icon.png');

const Login: React.FC = () => {
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
        <LoginButtonGoogle>
          <LoginButtonTextGoogle>LOGIN COM GOOGLE</LoginButtonTextGoogle>
        </LoginButtonGoogle>
        <LoginWarningText>
          Ao me registrar aceito as Políticas de Privacidade & Termos de Uso
        </LoginWarningText>
      </LoginContainer>
    </LoginScreen>
  );
};

export default Login;
