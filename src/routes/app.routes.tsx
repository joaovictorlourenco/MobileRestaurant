import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
import { Products } from "../screens/Products";

const { Navigator, Screen } = createNativeStackNavigator();

export function Router() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
      <Screen name="Products" component={Products} />
    </Navigator>
  );
}
