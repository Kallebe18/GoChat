import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Fi from 'react-native-vector-icons/Feather';

import {
  SearchScreen,
  ButtonsContainer,
  ButtonContainer
} from './styles';
import SearchSwiper from '../../components/SearchSwiper';
import api from '../../services/api';
import { IUserInfo } from '../../interfaces/IUserInfo';

const userListTest: string[] = ['Kallebe18', 'brunolemos', 'samuelematias']

const Search: React.FC = () => {
  const [users, setUsers] = useState<IUserInfo[]>([]);

  useEffect(() => {
    if(userListTest.length) {
      let newUsersList: IUserInfo[] = [];
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

  return (
    <SearchScreen>
      {
        users.length
          ?
            <>
              <SearchSwiper users={users}/>
              <ButtonsContainer>
                <ButtonContainer>
                  <Fi name="x" size={30} color="#fff"/>
                </ButtonContainer>
                <ButtonContainer>
                  <Fi name="message-square" size={30} color="#fff"/>
                </ButtonContainer>
              </ButtonsContainer>
            </>
          :
            <ActivityIndicator size="large" color="#8435a3"/>
      }
    </SearchScreen>
  )
};

export default Search;
