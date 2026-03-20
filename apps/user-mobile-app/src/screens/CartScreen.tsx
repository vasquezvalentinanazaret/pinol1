import React from "react";
import { View, Button } from "react-native";

export default function Cart({navigation}){
  return (
    <View>
      <Button title="Checkout" onPress={()=>navigation.navigate("Checkout")}/>
    </View>
  );
}
