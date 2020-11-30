import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const windowHeight = Dimensions.get('window').height;

export const Card = styled.View`
  height: ${windowHeight - 300}px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 20px;
  background-color: #333;
  border-radius: 20px;
  border-width: 2px;
  border-color: #222;
`;

export const CardImage = styled.Image`
  flex: 1;
  width: 100%;
  background-color: #bbb;
  border-radius: 20px;
`;

export const CardInfoContainer = styled.View`
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background-color: rgba(0,0,0,0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px 15px;
`;

export const CardInfoName = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const CardInfoDescription = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;
