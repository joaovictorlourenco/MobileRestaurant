import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Body,
  Card,
  EmptyMessage,
  SubtitleCard,
  TitleCard,
} from "./styles";
import { InputText } from "../../components/InputText";
import { FlatList } from "react-native";
import { getRestaurants, searchRestaurants } from "../../services/Restaurants";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

type Restaurant = {
  id: string;
  name: string;
  address: string;
  phone: string;
};

export function Home({ navigation }: Props) {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState([] as Restaurant[]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(
    [] as Restaurant[]
  );

  useEffect(() => {
    async function handleSearchRestaurants(search: string) {
      const filteredRestaurants = await searchRestaurants(search);
      setFilteredRestaurants(filteredRestaurants);
    }

    async function handleListRestaurants() {
      const restaurants = await getRestaurants();
      setRestaurants(restaurants);
    }

    handleListRestaurants();
    handleSearchRestaurants(search);
  }, [search]);

  async function handleRestaurantsProducts(id: string) {
    navigation.navigate("Products", { id: id });
  }

  return (
    <Container>
      <Header>
        <InputText
          placeholder="Search"
          placholderColor="#fff"
          value={search}
          onChangeText={setSearch}
        />
      </Header>
      <Body>
        <FlatList
          data={
            filteredRestaurants.length > 0 ? filteredRestaurants : restaurants
          }
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card onPress={() => handleRestaurantsProducts(item.id)}>
              <TitleCard>{item.name}</TitleCard>
              <SubtitleCard>
                {item.address} | {item.phone}
              </SubtitleCard>
            </Card>
          )}
          ListEmptyComponent={() => (
            <EmptyMessage>Nenhum restaurante encontrado...</EmptyMessage>
          )}
        />
      </Body>
    </Container>
  );
}
