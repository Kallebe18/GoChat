import styled from 'styled-components/native';

interface LoginButtonContainerProps {
  loginType: string;
}

export const LoginScreen = styled.View`
  flex: 1;
  background-color: #33263e;
  display: flex;
  justify-content: space-between;
`;

export const WelcomeContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeIcon = styled.Image`
  height: 120px;
  width: 120px;
  margin-top: 30px;
`;

export const WelcomeTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  color: #fff;
`;

export const WelcomeDescription = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: #fff;
`;

export const LoginContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const LoginButtonContainer = styled.TouchableOpacity<LoginButtonContainerProps>`
  height: 45px;
  width: 250px;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.loginType === 'google' ? '#da3d3d' : '#4D67C5'};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;

export const LoginWarningText = styled.Text`
  font-size: 14px;
  color: #fff;
  margin: 10px;
  padding: 0 20px;
  text-align: center;
`;
