import { API_URL } from "@env";
import axios from "axios";
import { getItemAsync } from "expo-secure-store";

export async function getRestaurants() {
  try {
    const token = await getItemAsync("token");

    const response = await axios.get(API_URL + "/restaurant/list", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getRestaurantById(id: any) {
  try {
    const token = await getItemAsync("token");
    const response = await axios.get(API_URL + "/restaurant/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function searchRestaurants(search: string) {
  try {
    const token = await getItemAsync("token");
    const response = await axios.get(API_URL + "/restaurant/search/" + search, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
