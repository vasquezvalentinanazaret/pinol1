import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { API } from "../services/api";

export default function Login({ navigation }){
  const [email,setEmail]=useState("user@test.com");
  const [password,setPassword]=useState("123456");

  const login = async ()=>{
    const res = await API.post("/auth/login",{email,password});
    global.token = res.data.token;
    navigation.navigate("Home");
  }

  return (
    <View style={{padding:20}}>
      <TextInput value={email} onChangeText={setEmail}/>
      <TextInput value={password} onChangeText={setPassword}/>
      <Button title="Login" onPress={login}/>
    </View>
  );
}
