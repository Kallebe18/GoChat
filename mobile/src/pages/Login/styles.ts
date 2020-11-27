import styled from 'styled-components/native';

// interface WelcomeIconProps {
//   source: string;
// }

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
  font-size: 20px;
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

export const LoginButtonGoogle = styled.TouchableOpacity`
  height: 45px;
  width: 250px;
  background-color: #da3d3d;
  border-radius: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonTextGoogle = styled.Text`
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
