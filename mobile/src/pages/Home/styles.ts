import styled from 'styled-components/native';

export const HomeScreen = styled.View`
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

export const FormContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const ChangeFormTypeContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  height: 30px;
`;

export const ChangeFormTypeText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const HomeWarningText = styled.Text`
  font-size: 13px;
  color: #ddd;
  margin: 10px;
  padding: 0 30px;
  text-align: center;
  margin-bottom: 20px;
`;
