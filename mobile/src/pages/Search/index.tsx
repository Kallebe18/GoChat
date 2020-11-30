import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { SearchScreen } from './styles';
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
            <SearchScreen>
              <SearchSwiper users={users}/>
            </SearchScreen>
          :
            <ActivityIndicator size="large" color="#8435a3"/>
      }
    </SearchScreen>
  )
};

export default Search;
