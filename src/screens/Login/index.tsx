import { Container, Slogan, Title } from "./styles";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

import { NavigationProp, ParamListBase } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

export function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext);

  const handleLogin = async () => {
    setLoading(true);
    const isLogged = await signIn(email, password);

    if (isLogged) {
      setLoading(false);
      navigation.navigate("Home");
    } else {
      setLoading(false);
      Alert.alert("Erro", "Email ou senha incorretos");
    }
  };

  return (
    <Container>
      <Title>iFome</Title>

      <Slogan>Quem tem boca tem fome</Slogan>
      <InputText
        placeholder="Email"
        placholderColor="#6b6b6b"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <InputText
        placeholder="Password"
        placholderColor="#6b6b6b"
        keyboardType="default"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Logar" isLoading={loading} onPress={handleLogin} />
    </Container>
  );
}
