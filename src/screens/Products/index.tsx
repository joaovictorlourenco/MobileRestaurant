import {
  Body,
  Card,
  Container,
  DescriptionCard,
  Header,
  Subtitle,
  SubtitleCard,
  Title,
  TitleCard,
} from "./styles";
import React, { useEffect, useState } from "react";
import { getRestaurantById } from "../../services/Restaurants";
import { FlatList, Text } from "react-native";
import { EmptyMessage } from "../Home/styles";

export interface Restaurant {
  id: string;
  name: string;
  phone: string;
  address: string;
  product: Product[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export function Products({ route }: any) {
  const [restaurant, setRestaurant] = useState({} as Restaurant);
  const [products, setProducts] = useState([] as Product[]);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    async function handleGetRestaurant(id: string) {
      const restaurant = await getRestaurantById(id);
      return restaurant;
    }

    handleGetRestaurant(route.params.id)
      .then((restaurant) => {
        setRestaurant(restaurant);
        setProducts(restaurant.product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [route.params.id]);

  return (
    <Container>
      <Header>
        <Title>{restaurant.name}</Title>
        <Subtitle>
          {restaurant.address} | {restaurant.phone}
        </Subtitle>
      </Header>
      <Body>
        <FlatList
          data={products}
          numColumns={numColumns}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card>
              <TitleCard>{item.name}</TitleCard>
              <SubtitleCard>
                R$
                {item.price
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </SubtitleCard>
              <DescriptionCard>{item.description}</DescriptionCard>
            </Card>
          )}
          ListEmptyComponent={() => (
            <EmptyMessage>Nenhum produto encontrado...</EmptyMessage>
          )}
        />
      </Body>
    </Container>
  );
}
