import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AvailableOrders from "./src/screens/AvailableOrders";
import ActiveDelivery from "./src/screens/ActiveDelivery";

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Orders" component={AvailableOrders}/>
        <Stack.Screen name="ActiveDelivery" component={ActiveDelivery}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
