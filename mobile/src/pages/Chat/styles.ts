import styled from 'styled-components/native';

export const ChatScreen = styled.View`
  flex: 1;
  background-color: #33263e;
`;

export const ChatContainer = styled.View`
  flex: 1;
`;

export const MessageContainer = styled.View`
  height: 60px;
  display: flex;
  flex-direction: row;
  padding: 0 10px;
`;

export const MessageTextContainer = styled.View`
  flex: 1;
  height: 46px;
  border-radius: 23px;
  margin-right: 10px;
  padding: 0 10px;
  background-color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MessageTextInput = styled.TextInput`
  margin-left: 5px;
  font-size: 16px;
  color: #fff;
`;

export const MessageSendButton = styled.TouchableOpacity`
  height: 46px;
  width: 46px;
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d6dce;
`;
