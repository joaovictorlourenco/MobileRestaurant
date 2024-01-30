import { NavigationContainer } from "@react-navigation/native";

import { Router } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
