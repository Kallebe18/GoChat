import styled from 'styled-components/native';

export const SearchScreen = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #33263e;
`;

export const ButtonsContainer = styled.View`
  position: absolute;
  height: 80px;
  width: 100%;
  bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-width: 2px;
  border-color: #222;
`;
