import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screen/Account";

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ title: "Mi Cuenta" }}
      />
    </Stack.Navigator>
  );
}
