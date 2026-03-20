import React from "react";
import { View, Button } from "react-native";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

export default function App(){
  const sendLocation = ()=>{
    socket.emit("driver_location",{orderId:"test",lat:12,lng:-86});
  }
  return <View><Button title="Send Location" onPress={sendLocation}/></View>
}
