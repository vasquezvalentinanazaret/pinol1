import React,{useEffect} from "react";
import { View,Text } from "react-native";
import io from "socket.io-client";

export default function Tracking({route}){
  useEffect(()=>{
    const socket = io("http://localhost:4000");
    socket.emit("join_order",route.params.orderId);
    socket.on("status_update",(data)=>console.log(data));
  },[]);

  return <View><Text>Tracking...</Text></View>
}
