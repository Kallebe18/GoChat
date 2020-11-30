import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-deck-swiper';
import { Text } from 'react-native';

import {
  Card,
  CardImage,
  CardInfoContainer,
  CardInfoDescription,
  CardInfoName,
} from './styles';
import api from '../../services/api';
import Loader from '../Loader';

const userListTest: string[] = []

interface UserInfo {
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
}

const SearchCard: React.FC = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);

  useEffect(() => {
    if(userListTest.length) {
      let newUsersList: UserInfo[] = [];
      const getUsers = async () => {
        for(let i=0; i<userListTest.length; i++) {
          const response = await api.get(`/users/${userListTest[i]}`);
          newUsersList.push(response.data);
        };
        setUsers([...users, ...newUsersList]);
      }

      getUsers();
    }
  }, []);

  if (users.length) {
    return (
      <Swiper
        cards={users}
        backgroundColor={"#33263e"}
        infinite
        cardIndex={0}
        stackSize={3}
        verticalSwipe={false}
        renderCard={(user: UserInfo, cardIndex) => {
          console.log(users);
          return (
            <Card key={user.id}>
              <CardImage source={{uri: user.avatar_url}}/>
              <CardInfoContainer>
                <CardInfoName>{user.name}</CardInfoName>
                <CardInfoDescription numberOfLines={2}>
                  {user.bio}
                </CardInfoDescription>
              </CardInfoContainer>
            </Card>
          )
        }}
      />
    );
  } else {
    return <Loader />
  }
}

export default SearchCard;
