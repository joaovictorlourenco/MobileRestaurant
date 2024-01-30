import { API_URL } from "@env";
import axios from "axios";
import { setItemAsync } from "expo-secure-store";

export async function login(email: string, password: string) {
  if (!email || !password) {
    return null;
  }
  try {
    const response = await axios.post(API_URL + "/auth/login", {
      email,
      password,
    });

    await setItemAsync("token", response.data.access_token);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
