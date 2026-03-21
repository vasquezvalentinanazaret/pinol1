import React from "react";
import { View, Button, Alert } from "react-native";
import { useCart } from "../context/CartContext";

export default function CheckoutScreen({ navigation }: any) {
  const { cart, total, clearCart } = useCart();

  const createOrder = async () => {
    try {
      const response = await fetch("http://TU_IP:4000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: cart,
          total: total,
          paymentMethod: "cash"
        })
      });

      const order = await response.json();

      await fetch("http://TU_IP:4000/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          orderId: order.id,
          method: "cash"
        })
      });

      clearCart();

      navigation.navigate("Tracking", { orderId: order.id });

    } catch (error) {
      Alert.alert("Error", "No se pudo crear el pedido");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Confirmar Pedido 🚀" onPress={createOrder} />
    </View>
  );
}
