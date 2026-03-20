import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useCart } from "../context/CartContext";

const products = [
  { id: "1", name: "Hamburguesa", price: 5 },
  { id: "2", name: "Pizza", price: 8 },
  { id: "3", name: "Tacos", price: 4 }
];

export default function MenuScreen({ navigation }: any) {
  const { addToCart } = useCart();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Agregar" onPress={() => addToCart(item)} />
          </View>
        )}
      />

      <Button title="Ver carrito 🛒" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
}
