import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #252525;
`;

export const Header = styled.View`
  width: 100%;
  height: 140px;
  padding-top: 20px;
  background-color: #fa6800;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: #f5f5f5;
  font-size: 15px;
`;

export const Body = styled.View`
  width: 100%;
  flex: 1;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View`
  width: 160px;
  height: 160px;
  background-color: #fff;
  align-items: center;
  border-radius: 15px;
  text-align: justify;
  justify-content: space-evenly;
  margin: 10px;
`;

export const TitleCard = styled.Text`
  color: #000;
  font-size: 20px;
  width: 90%;
  text-align: center;
  font-weight: bold;
`;

export const SubtitleCard = styled.Text`
  color: #fa6800;
  font-size: 15px;
`;

export const DescriptionCard = styled.Text`
  color: #000;
  text-align: left;
  width: 85%;
  font-size: 10px;
`;

export const FlatList = styled.FlatList`
  width: 100%;
  height: 100%;
`;
