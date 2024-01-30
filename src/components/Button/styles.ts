import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  width: 80%;

  align-items: center;
  justify-content: center;

  background-color: #fa6800;
`;

export const Title = styled.Text`
  color: #f5f5f5;
  font-size: 24px;
  font-family: "Roboto_700Bold";
  text-align: center;
`;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  color: "#f5f5f5",
}))``;
