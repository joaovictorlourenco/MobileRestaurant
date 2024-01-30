import { TouchableOpacityProps } from "react-native";

import { Container, Loading, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: String;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} disabled={isLoading} {...rest}>
      {isLoading ? <Loading /> : <Title>{title}</Title>}
    </Container>
  );
}
