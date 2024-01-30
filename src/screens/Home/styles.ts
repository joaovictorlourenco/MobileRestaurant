import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #252525;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 150px;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  width: 100%;
  flex: 1;
  height: 80%;
  justify-content: center;
`;

export const Card = styled.TouchableOpacity`
  height: 90px;
  width: 90%;
  margin: 0 auto 20px auto;
  border-radius: 10px;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  padding: 15px;
`;

export const EmptyMessage = styled.Text`
  color: #fff;
  font-size: 15px;
  text-align: center;
  margin-top: 20px;
`;

export const TitleCard = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export const SubtitleCard = styled.Text`
  color: #9e9e9e;
  font-size: 15px;
`;
