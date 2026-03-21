import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const statuses = ["ACCEPTED", "ON_THE_WAY", "DELIVERED"];

export default function ActiveDelivery({ route }: any) {
  const { order } = route.params;
  const [statusIndex, setStatusIndex] = useState(0);

  const updateStatus = async () => {
    const newStatus = statuses[statusIndex];

    await fetch(`http://TU_IP:4000/api/orders/${order.id}/status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: newStatus })
    });

    if (statusIndex < statuses.length - 1) {
      setStatusIndex(statusIndex + 1);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Orden: {order.id}</Text>
      <Text>Estado: {statuses[statusIndex]}</Text>

      <Button title="Actualizar estado 🚚" onPress={updateStatus} />
    </View>
  );
}
