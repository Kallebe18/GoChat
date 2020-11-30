import React from 'react';
import Fi from 'react-native-vector-icons/Feather';

import {
  ContactsUserContainer,
  ContactImage,
  ContactInfoContainer,
  ContactName,
  ContactLastMessage,
  ContactLastEntry,
  ContactsScreen,
  ContactLastMessageContainer
} from './styles';
import { FlatList } from 'react-native-gesture-handler';

interface UserInfo {
  id: number;
  name: string;
  lastMessage: string;
  lastEntry: Date;
  imageUri: string;
  lastMessageState: number;
}

let Users: UserInfo[] = [
  {
    id: 1,
    name: "Fulano",
    lastMessage: "eae mano",
    lastEntry: new Date(),
    imageUri: "https://secure.gravatar.com/avatar/6971cc259ddbb183c9843369be63e3a2?s=100&d=identicon&r=g",
    lastMessageState: 1
  },
  {
    id: 2,
    name: "Siclano",
    lastMessage: "qual foi",
    lastEntry: new Date(),
    imageUri: "https://avatars1.githubusercontent.com/u/6936373?v=4",
    lastMessageState: 1
  },
  {
    id: 3,
    name: "Fulano",
    lastMessage: "fala tu",
    lastEntry: new Date(),
    imageUri: "https://avatars2.githubusercontent.com/u/35331195?v=4",
    lastMessageState: 1
  }
];

const Contacts: React.FC = () => {
  return (
    <ContactsScreen>
      <FlatList
        data={Users}
        keyExtractor={item => item.id.toString()}
        renderItem={
          ({ item }) => {
            return (
              <ContactsUserContainer>
                <ContactImage source={{ uri: item.imageUri }}/>

                <ContactInfoContainer>
                  <ContactName>{item.name}</ContactName>
                  <ContactLastMessageContainer>
                    <Fi name="check" size={14} color="#aaa"/>
                    <ContactLastMessage>
                      {item.lastMessage}
                    </ContactLastMessage>
                  </ContactLastMessageContainer>
                </ContactInfoContainer>

                <ContactLastEntry>
                  {item.lastEntry.getDate().toString()}
                </ContactLastEntry>
              </ContactsUserContainer>
            );
          }
        }
      />
    </ContactsScreen>
  );
};

export default Contacts;
