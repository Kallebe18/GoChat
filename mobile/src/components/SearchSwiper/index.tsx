import React from 'react';
import Swiper from 'react-native-deck-swiper';

import {
  Card,
  CardImage,
  CardInfoContainer,
  CardInfoDescription,
  CardInfoName,
} from './styles';
import { IUserInfo } from '../../interfaces/IUserInfo';

interface SearchSwiperProps {
  users: IUserInfo[]
}

const SearchSwiper: React.FC<SearchSwiperProps> =
  ({ users }: SearchSwiperProps) => (
    <Swiper
      cards={users}
      backgroundColor={"#33263e"}
      infinite
      cardIndex={0}
      stackSize={3}
      verticalSwipe={false}
      renderCard={(user: IUserInfo, cardIndex) => {
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
)

export default SearchSwiper;
