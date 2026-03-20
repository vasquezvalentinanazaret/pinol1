import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartProvider } from "./src/context/CartContext"; // 🔥 NUEVO

import Login from "./src/screens/LoginScreen";
import Home from "./src/screens/HomeScreen";
import Cart from "./src/screens/CartScreen";
import Checkout from "./src/screens/CheckoutScreen";
import Tracking from "./src/screens/OrderTrackingScreen";
import Menu from "./src/screens/MenuScreen";
const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <CartProvider> {/* 🔥 ENVUELVE TODO */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Cart" component={Cart}/>
          <Stack.Screen name="Checkout" component={Checkout}/>
          <Stack.Screen name="Tracking" component={Tracking}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
