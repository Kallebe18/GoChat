import styled from 'styled-components/native';

export const ContactsScreen = styled.View`
  flex: 1;
  background-color: #33263e;
`;

export const ContactsUserContainer = styled.TouchableOpacity`
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #222;
`;

export const ContactImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-left: 10px;
  margin-right: 15px;
`;

export const ContactInfoContainer = styled.View`
  display: flex;
  border-bottom-width: 2px;
  border-color: #333;
  padding: 5px 0;
  margin-right: auto;
  flex: 1;
`;

export const ContactName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const ContactLastMessageContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ContactLastMessage = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #aaa;
  margin-left: 5px;
`;

export const ContactLastEntry = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #aaa;
  align-self: flex-end;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: auto;
`;
