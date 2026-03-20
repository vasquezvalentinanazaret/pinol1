import React from "react";
import { View, Button } from "react-native";
import { API } from "../services/api";

export default function Checkout({navigation}){
  const createOrder = async ()=>{
    const order = await API.post("/orders",{
      items:[],
      total:10,
      paymentMethod:"cash"
    },{
      headers:{Authorization:`Bearer ${global.token}`}
    });

    await API.post("/payments",{
      orderId:order.data.id,
      method:"cash"
    },{
      headers:{Authorization:`Bearer ${global.token}`}
    });

    navigation.navigate("Tracking",{orderId:order.data.id});
  }

  return <View><Button title="Confirmar" onPress={createOrder}/></View>
}
