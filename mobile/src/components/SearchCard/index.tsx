import React from 'react';
import Swiper from 'react-native-deck-swiper';

import {
  Card,
  CardImage,
  CardInfoContainer,
  CardInfoDescription,
  CardInfoName
} from './styles';

const SearchCard: React.FC = (props) => {
  return (
    <Swiper
      cards={['a', 'b', 'c']}
      backgroundColor={"#33263e"}
      renderCard={user => {
        return (
          <Card>
            <CardImage source={{uri:  "https://avatars3.githubusercontent.com/u/48997186?v=4" }}/>
            <CardInfoContainer>
              <CardInfoName>Kallebe Gomes</CardInfoName>
              <CardInfoDescription>Homem, 20 anos</CardInfoDescription>
            </CardInfoContainer>
          </Card>
        )
      }}
    />
  );
}

export default SearchCard;
