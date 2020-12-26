import styled from 'styled-components/native';

export const ProfileContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const ProfileImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border-width: 2px;
  border-color: #555;
`;

export const ProfileName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-top: 15px;
  color: #fff;
`;

export const ProfileInfo = styled.Text`
  font-size: 14px;
  color: #ddd;
  margin-top: 5px;
`;

export const NavButtonContainer = styled.View`
  height: 45px;
  background-color: #999;
  padding: 5px;
  margin: 10px 0;
`;

export const NavButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;
