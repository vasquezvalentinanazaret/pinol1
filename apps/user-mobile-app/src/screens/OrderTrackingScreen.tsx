import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const statusFlow = [
  "CREATED",
  "PREPARING",
  "ON_THE_WAY",
  "DELIVERED"
];

export default function OrderTrackingScreen({ route }: any) {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => {
        if (prev < statusFlow.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 4000); // cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Estado del pedido:
      </Text>

      <Text style={{ marginTop: 20, fontSize: 18 }}>
        {statusFlow[statusIndex]}
      </Text>
    </View>
  );
}
