import React, { useState } from 'react'
import {
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native';
import Fi from 'react-native-vector-icons/Feather';

import {
  ChatScreen,
  ChatContainer,
  MessageContainer,
  MessageTextContainer,
  MessageSendButton,
  MessageTextInput
} from './styles';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleMessageTextChange = (text: string) => {
    setMessage(text);
  }

  const handleSendMessage = (event: GestureResponderEvent) => {
    console.log(event.currentTarget);
  }

  return (
    <ChatScreen>
      <ChatContainer/>
      <MessageContainer>
        <MessageTextContainer>
          <TouchableOpacity>
            <Fi name="smile" size={28} color="#ccc"/>
          </TouchableOpacity>
          <MessageTextInput
            onChangeText={handleMessageTextChange}
            placeholder="Digite sua mensagem"
            placeholderTextColor="#aaa"/>
        </MessageTextContainer>
        <MessageSendButton>
          <TouchableOpacity onPress={handleSendMessage}>
            <Fi name="send" size={25} color="#ccc" style={{
                paddingTop: 3,
                paddingRight: 3,
              }}
            />
          </TouchableOpacity>
        </MessageSendButton>
      </MessageContainer>
    </ChatScreen>
  )
}

export default Chat;
