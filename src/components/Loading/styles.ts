import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #252525;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: "#FA6800",
}))``;
