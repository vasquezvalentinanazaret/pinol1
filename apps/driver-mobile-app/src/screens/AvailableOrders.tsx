import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

export default function AvailableOrders({ navigation }: any) {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await fetch("http://TU_IP:4000/api/orders");
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {orders.map((order: any) => (
        <View key={order.id} style={{ marginBottom: 15 }}>
          <Text>Orden: {order.id}</Text>
          <Text>Total: ${order.total}</Text>

          <Button
            title="Aceptar 🚚"
            onPress={() => navigation.navigate("ActiveDelivery", { order })}
          />
        </View>
      ))}
    </View>
  );
}
